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

  newAmbienteForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('',  Validators.required),
    medios: new FormControl('',  Validators.required),
  });

  ambiente = {
    titulo: this.newAmbienteForm.get('titulo').value,
    descripcion: this.newAmbienteForm.get('descripcion').value,
    enUso: this.newAmbienteForm.get('enUso').value,
    medios: this.newAmbienteForm.get('medios').value
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newAmbienteForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newAmbienteForm.get('titulo').value);
  }

}
