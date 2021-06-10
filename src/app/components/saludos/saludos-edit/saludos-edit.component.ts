import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Saludo } from 'src/app/models/models';
import { SaludosService } from 'src/app/services/saludos-service/saludos.service';

@Component({
  selector: 'app-saludos-edit',
  templateUrl: './saludos-edit.component.html',
  styleUrls: ['./saludos-edit.component.scss']
})
export class SaludosEditComponent implements OnInit {

  checked: boolean = false;

  @Input() saludoInput: Saludo = {
    id: 0,
    titulo: '',
    descripcion: '',
    texto: '',
    medios: [],
    enUso: 0
}

saludosFormEdit: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private saludoService:SaludosService) {
    this.saludoInput = data.row;
    this.saludosFormEdit = this.fb.group({
      titulo: new FormControl(this.saludoInput.titulo),
      descripcion: new FormControl(this.saludoInput.descripcion),
      texto: new FormControl(this.saludoInput.texto),
      image: new FormControl(this.saludoInput.medios[0].url),
      video: new FormControl(this.saludoInput.medios[1].url),
      enUso: this.checkInUse(this.saludoInput.enUso)
    });
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

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.saludoInput = {
      id: this.data.row.id,
      titulo: this.saludosFormEdit.get('titulo').value,
      descripcion: this.saludosFormEdit.get('descripcion').value,
      texto: this.saludosFormEdit.get('texto').value,
      medios: [{ url: this.saludosFormEdit.get('image').value }, { url: this.saludosFormEdit.get('video').value }],
      enUso: this.unCheckInUse(this.saludosFormEdit.get('enUso').value)
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saludoService.deleteSaludos(this.saludoInput).subscribe(
          res => {
            console.log("Saludo editado", res, this.saludoInput)
            Swal.fire(
              'Perfecto',
              'Saludo actualizado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", this.saludoInput)
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
