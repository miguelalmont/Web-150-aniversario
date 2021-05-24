import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Visita } from 'src/app/models/models';

@Component({
  selector: 'app-visitas-details',
  templateUrl: './visitas-details.component.html',
  styleUrls: ['./visitas-details.component.scss']
})
export class VisitasDetailsComponent implements OnInit {

  @Input() visitaDetails: Visita = {
      titulo: '',
      enUso: 0,
      medios: []
  }

  detailVisitaForm: FormGroup;


  newVisitaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  visita = {
    titulo: this.newVisitaForm.get('titulo').value,
    enUso: this.newVisitaForm.get('enUso').value,
    medios: this.newVisitaForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.visitaDetails = data.row;
    this.detailVisitaForm = this.fb.group({
      titulo: new FormControl(this.visitaDetails.titulo),
      enUso: new FormControl(this.visitaDetails.enUso),
      medios: new FormControl(this.visitaDetails.medios)
    });
  }

  get titulo() { return this.newVisitaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.newVisitaForm.get('titulo').value);
  }

}
