import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Visita } from 'src/app/models/models';
import { VisitasService } from 'src/app/services/visitas-service/visitas.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-visitas-form',
  templateUrl: './visitas-form.component.html',
  styleUrls: ['./visitas-form.component.scss']
})
export class VisitasFormComponent implements OnInit {

  checked: boolean = false;

  newVisitaForm: FormGroup = this.fb.group({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    image: new FormControl(''),
    video: new FormControl(''),
    enUso: this.checked
  });

  visita: Visita = {
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  }

  constructor(private fb: FormBuilder, private visitaService: VisitasService) {}
  
  ngOnInit(): void {
  }

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

  onFormSubmit() {
    this.visita = {
      titulo: this.newVisitaForm.get('titulo').value,
      descripcion: this.newVisitaForm.get('descripcion').value,
      medios: [{ url: this.newVisitaForm.get('image').value }, { url: this.newVisitaForm.get('video').value }],
      enUso: this.unCheckInUse(this.newVisitaForm.get('enUso').value)
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
        this.visitaService.createVisita(this.visita).subscribe(
          res => {
            console.log("usuario insertado", res, this.visita)
            Swal.fire(
              'Perfecto',
              'Usuario insertado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", this.visita)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al editar',
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
