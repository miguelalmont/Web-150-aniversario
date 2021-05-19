import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ambiente } from 'src/app/models/models';
@Component({
  selector: 'app-ambientes-pj-details',
  templateUrl: './ambientes-pj-details.component.html',
  styleUrls: ['./ambientes-pj-details.component.scss']
})
export class AmbientesPjDetailsComponent implements OnInit {

  @Input() ambienteDetails: Ambiente = {
      titulo: '',
      enUso: 0,
      medios: []
  }

  detailAmbienteForm: FormGroup;


  newAmbienteForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  ambiente = {
    titulo: this.newAmbienteForm.get('titulo').value,
    enUSo: this.newAmbienteForm.get('enUso').value,
    medios: this.newAmbienteForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.ambienteDetails = data.row;
    this.detailAmbienteForm = this.fb.group({
      titulo: new FormControl(this.ambienteDetails.titulo),
      enUso: new FormControl(this.ambienteDetails.enUso),
      medios: new FormControl(this.ambienteDetails.medios)
    });
  }

  get titulo() { return this.newAmbienteForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.newAmbienteForm.get('titulo').value);
  }

}
