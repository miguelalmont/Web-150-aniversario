import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oracion } from 'src/app/models/models';
import { OracionService } from 'src/app/services/oracion-service/oracion.service';
import { Inject } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-oracion-edit',
  templateUrl: './oracion-edit.component.html',
  styleUrls: ['./oracion-edit.component.scss']
})
export class OracionEditComponent implements OnInit {

  @Input() oracionInput: Oracion = {
    id: 0,
    titulo: '',
    oracion: '',
    enUso: 0
}

  newOracionForm: FormGroup = this.fb.group({

    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('',  Validators.required)
    
  });

  oracion = {
    id: this.oracionInput.id,
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value,
    enUso: this.newOracionForm.get('enUso').value
    
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private oracionService: OracionService) {
    this.oracionInput = data.row;
    this.newOracionForm = this.fb.group({
      titulo: new FormControl(this.oracionInput.titulo),
      oracion: new FormControl(this.oracionInput.oracion),
      enUso: new FormControl(this.checkEnUso(this.oracionInput.enUso))
    });
  }

  get titulo() { return this.newOracionForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.oracion = {
      id: this.data.row.id,
      titulo: this.newOracionForm.get('titulo').value,
      oracion: this.newOracionForm.get('oracion').value,
      enUso: this.unCheckEnUso(this.data.row.enUso)
    }
    this.oracionService.editOracion(this.oracion).subscribe(
      res => {
        console.log("Oracion editada", res, this.oracion)
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
            Swal.fire(
              'Perfecto',
              'Oracion actualizada correctamente',
              'success'
            )
          }
        })
      },
      error => {
        console.error(error, "Error", this.oracion)
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

  checkEnUso(enUso: number) {
    if (enUso === 1)
      return true;
    else
      return false;
  }

  unCheckEnUso(enUso: boolean) {
    if (enUso)
      return 1;
    else
      return 2;
  }

}
