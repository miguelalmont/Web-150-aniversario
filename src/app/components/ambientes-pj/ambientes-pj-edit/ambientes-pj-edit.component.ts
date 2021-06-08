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

  @Input() ambienteInput: ambientesPj = {
    id: 0,
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
}

  newAmbienteForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('',  Validators.required),
    medios: new FormControl('',  Validators.required),
  });

  ambiente = {
    id: this.ambienteInput.id,
    titulo: this.newAmbienteForm.get('titulo').value,
    descripcion: this.newAmbienteForm.get('descripcion').value,
    enUso: this.newAmbienteForm.get('enUso').value,
    medios: this.newAmbienteForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private ambienteService: AmbientesPJService) {}

  get titulo() { return this.newAmbienteForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    
    this.ambiente = {
      id: this.data.row.id,
      titulo: this.newAmbienteForm.get('titulo').value,
      descripcion: this.newAmbienteForm.get('descripcion').value,
      enUso: this.newAmbienteForm.get('enUso').value,
      medios: this.newAmbienteForm.get('medios').value
    }
    this.ambienteService.updateAmbientesPj(this.ambiente).subscribe(
      res => console.log("formulario editado"),
      error => console.log(error)
    );
  }

  editarSwt(){
    Swal.fire({
      title: '¿Estas seguro?',
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
          'Ambiente actualizado correctamente',
          'success'
        )
      }
    })
  }

}
