import {  ambientesPj } from './../../../models/models';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AmbientesPJService } from 'src/app/services/ambientesPJ-service/ambientes-pj.service.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-ambientes-pj-edit',
  templateUrl: './ambientes-pj-edit.component.html',
  styleUrls: ['./ambientes-pj-edit.component.scss']
})
export class AmbientesPjEditComponent implements OnInit {

  @Input()
  ambienteInput: ambientesPj = {
    id: 0,
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  }

  checked: boolean = false;

  newAmbienteForm: FormGroup = this.fb.group({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    video: new FormControl(''),
    enUso: false
  });
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private ambienteService: AmbientesPJService) {
    this.ambienteInput = data.row;
    console.log(this.ambienteInput)
    if (this.data.row.medios != undefined || this.data.row.descripcion != undefined || this.data.row.medios != null || this.data.row.descripcion != null) {
      this.newAmbienteForm = this.fb.group({
        titulo: new FormControl(this.data.row.titulo, [Validators.required]),
        descripcion: new FormControl(this.data.row.descripcion, [Validators.required]),
        video: new FormControl(this.data.row.medios[0].url),
        enUso: this.checked
      });
    } else {
      this.newAmbienteForm = this.fb.group({
        titulo: new FormControl(this.data.row.titulo, [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        video: new FormControl(''),
        enUso: this.checked
      });
    }
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

  onFormSubmit() {
    this.ambienteInput = {
      id: this.data.row.id,
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
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ambienteService.editAmbiente(this.ambienteInput).subscribe(
          res => {
            console.log("ambiente editado", res, this.ambienteInput)
            Swal.fire(
              'Perfecto',
              'Ambiente actualizado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", this.ambienteInput)
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
