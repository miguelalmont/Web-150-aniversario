import { MaterialesViewComponent } from './../materiales-view/materiales-view.component';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MaterialesService } from 'src/app/services/materiales-service/materiales.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-materiales-form',
  templateUrl: './materiales-form.component.html',
  styleUrls: ['./materiales-form.component.scss']
})
export class MaterialesFormComponent implements OnInit {

  checked: boolean = false;

  newMaterialesForm: FormGroup;

  materiales = {
    titulo: '',
    contenido: '',
    url: '',
    enUso: 0,
  }

  constructor(private fb: FormBuilder, private materialesService: MaterialesService,
    public dialogRef: MatDialogRef<MaterialesViewComponent>) {
    this.newMaterialesForm = this.fb.group({
      titulo: new FormControl(''),
      contenido: new FormControl(''),
      url: new FormControl(''),
      enUso: this.checked,
    })
  }

  ngOnInit(): void {}

  onFormSubmit(): void {

    this.materiales = {
      titulo: this.newMaterialesForm.get('titulo').value,
      contenido: this.newMaterialesForm.get('contenido').value,
      url: this.newMaterialesForm.get('url').value,
      enUso: this.materiales.enUso
    }

    Swal.fire({
      title: '¿Estas seguro?',
      text: "Vas a crear una entrada de materiales",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Crear'
    }).then((result) => {
      if (result.isConfirmed) {
        this.materialesService.createMaterial(this.materiales).subscribe(
          response => {
            console.log('Material insertado ', response)
            Swal.fire(
              'Perfecto',
              'Material creado correctamente',
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



}
