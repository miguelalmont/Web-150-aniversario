import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Saludo } from 'src/app/models/models';

@Component({
  selector: 'app-saludos-details',
  templateUrl: './saludos-details.component.html',
  styleUrls: ['./saludos-details.component.scss']
})
export class SaludosDetailsComponent implements OnInit {

  @Input() saludoDetails: Saludo = {
      titulo: '',
      contenido: '',
      descripcion: '',
      enUso: 0,
      medios: []
  }

  detailSaludoForm: FormGroup;


  newSaludoForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    contenido: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  saludo = {
    titulo: this.newSaludoForm.get('titulo').value,
    contenido: this.newSaludoForm.get('contenido').value,
    descripcion: this.newSaludoForm.get('descripcion').value,
    enUso: this.newSaludoForm.get('enUso').value,
    medios: this.newSaludoForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.saludoDetails = data.row;
    this.detailSaludoForm = this.fb.group({
      titulo: new FormControl(this.saludoDetails.titulo),
      subtitulo: new FormControl(this.saludoDetails.contenido),
      descripcion: new FormControl(this.saludoDetails.descripcion),
      enUso: new FormControl(this.saludoDetails.enUso),
      medios: new FormControl(this.saludoDetails.medios)
    });
  }

  get titulo() { return this.newSaludoForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.newSaludoForm.get('titulo').value);
  }

}
