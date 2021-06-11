import { AmbientesPjViewComponent } from './../ambientes-pj-view/ambientes-pj-view.component';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ambientesPj } from 'src/app/models/models';
import { AmbientesPJService } from 'src/app/services/ambientesPJ-service/ambientes-pj.service.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ambientes-pj-form',
  templateUrl: './ambientes-pj-form.component.html',
  styleUrls: ['./ambientes-pj-form.component.scss']
})
export class AmbientesPjFormComponent implements OnInit {

  ambiente: ambientesPj = {
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  }

  newAmbienteForm: FormGroup;
  checked: boolean = false;

  constructor(private fb: FormBuilder, private ambienteService: AmbientesPJService,
    public dialogRef: MatDialogRef<AmbientesPjViewComponent>) {
    this.newAmbienteForm = this.fb.group({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      video: new FormControl(''),
      enUso: this.checked
    });
   }

  ngOnInit(): void { }

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
    this.ambiente = {
      titulo: this.newAmbienteForm.get('titulo').value,
      descripcion: this.newAmbienteForm.get('descripcion').value,
      medios: [{ url: this.newAmbienteForm.get('video').value }],
      enUso: this.unCheckInUse(this.newAmbienteForm.get('enUso').value)
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
        this.ambienteService.createAmbiente(this.ambiente).subscribe(
          res => {
            console.log("Ambiente insertado", res, this.ambiente)
            Swal.fire(
              'Perfecto',
              'Ambiente insertado correctamente',
              'success'
            )
            this.dialogRef.close()
          },
          error => {
            console.error(error, "Error", this.ambiente)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al insertar',
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
}
