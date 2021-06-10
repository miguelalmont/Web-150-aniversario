import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Saludo } from 'src/app/models/models';
import { SaludosService } from 'src/app/services/saludos-service/saludos.service';

@Component({
  selector: 'app-saludos-form',
  templateUrl: './saludos-form.component.html',
  styleUrls: ['./saludos-form.component.scss']
})
export class SaludosFormComponent implements OnInit {

  checked: boolean = false;

  newSaludoForm: FormGroup;

  saludos: Saludo = {
    titulo: '',
    texto: '',
    descripcion: '',
    medios: [],
    enUso: 0
  }

  constructor(private fb: FormBuilder, private saludoService: SaludosService) {
    this.newSaludoForm = this.fb.group({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      descripcion: new FormControl(''),
      image: new FormControl(''),
      video: new FormControl(''),
      enUso: this.checked
    });
  }

  ngOnInit(): void {}

  checkInUse(inUse: number) {
    if (inUse == 1)
      return true;
    else
      return false;
  }

  unCheckInUse(enUso: boolean) {
    if (enUso)
      return 1;
    else
      return 0;
  }

  onFormSubmit(): void {
    this.saludos = {
      titulo: this.newSaludoForm.get('titulo').value,
      texto: this.newSaludoForm.get('texto').value,
      descripcion: this.newSaludoForm.get('descripcion').value,
      medios: [{ url: this.newSaludoForm.get('image').value }, { url: this.newSaludoForm.get('video').value }],
      enUso: this.unCheckInUse(this.newSaludoForm.get('enUso').value)
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Insertar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saludoService.createSaludos(this.saludos).subscribe(
          res => {
            console.log("Saludo insertado", res, this.saludos)
            Swal.fire(
              'Perfecto',
              'Saludo insertado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", this.saludos)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al insertar',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
          }
        );
      }
    })
  }

}