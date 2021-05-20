import { ambientesPj } from './../../../models/models';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ambientes-pj-edit',
  templateUrl: './ambientes-pj-edit.component.html',
  styleUrls: ['./ambientes-pj-edit.component.scss']
})
export class AmbientesPjEditComponent implements OnInit {

  @Input()
  ambienteToDetail: ambientesPj = {
    id: 0,
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  };

  newAmbienteForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: ambientesPj) { 
    this.ambienteToDetail.id = data.id;
    this.ambienteToDetail.titulo = data.titulo;
    this.ambienteToDetail.descripcion = data.descripcion;
    this.ambienteToDetail.enUso = data.enUso;
    this.ambienteToDetail.medios = data.medios;
    
    this.newAmbienteForm = this.fb.group({
      titulo: [data.titulo],
      descripcion: [data.descripcion],
      enUso: [data.enUso],
      medios: [data.medios]
    });
   }

  get title() { return this.newAmbienteForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newAmbienteForm.get('title').value);
  }

}
