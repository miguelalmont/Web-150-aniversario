import {  ambientesPj } from './../../../models/models';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AmbientesPJService } from 'src/app/services/ambientesPJ-service/ambientes-pj.service.service';

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

}
