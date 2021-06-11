import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OracionService } from 'src/app/services/oracion-service/oracion.service';
import Swal from 'sweetalert2';
import { OracionViewComponent } from '../oracion-view/oracion-view.component';


@Component({
  selector: 'app-oracion-form',
  templateUrl: './oracion-form.component.html',
  styleUrls: ['./oracion-form.component.scss']
})
export class OracionFormComponent implements OnInit {

  checked: boolean = false;

  newOracionForm: FormGroup;

  oracion = {
    titulo: '',
    oracion: '',
    enUso: 0
  }

  constructor(private fb: FormBuilder, private oracionService: OracionService,
    public dialogRef: MatDialogRef<OracionViewComponent>) {
    this.newOracionForm = this.fb.group({
      titulo: new FormControl('', [Validators.required, Validators.minLength(6)]),
      oracion: new FormControl('', [Validators.required, Validators.minLength(6)]),
      enUso: this.checked
    });   
  }

  ngOnInit(): void { }

  onFormSubmit(): void {
    this.oracion = {
      titulo: this.newOracionForm.get('titulo').value,
      oracion: this.newOracionForm.get('oracion').value,
      enUso: this.unCheckEnUso(this.newOracionForm.get('enUso').value)
    }
    console.log('Name:' + this.newOracionForm.get('titulo').value);
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Vas a crear una Oracion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Crear'
    }).then((result) => {
      if (result.isConfirmed) {
        this.oracionService.createOracion(this.oracion).subscribe(
          response => {
            console.log('Oracion insertada', response)
            Swal.fire(
              'Perfecto',
              'Oracion creada correctamente',
              'success'
            )
            this.dialogRef.close()
          },
          error => {
            console.error('Error ', error)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al crear',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
            this.dialogRef.close()
          }
        );
      }
    })
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
      return 0;
  }

}
