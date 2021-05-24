import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oracion } from 'src/app/models/models';

@Component({
  selector: 'app-oracion-details',
  templateUrl: './oracion-details.component.html',
  styleUrls: ['./oracion-details.component.scss']
})
export class OracionDetailsComponent implements OnInit {

  @Input() oracionDetails: Oracion = {
      titulo: '',
      oracion: '',
      enUso: 0
  }

  detailOracionForm: FormGroup;


  newOracionForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required)
  });

  oracion = {
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value,
    enUso: this.newOracionForm.get('enUso').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.oracionDetails = data.row;
    this.detailOracionForm = this.fb.group({
      titulo: new FormControl(this.oracionDetails.titulo),
      oracion: new FormControl(this.oracionDetails.oracion),
      enUso: new FormControl(this.oracionDetails.enUso)
    });
  }

  get titulo() { return this.newOracionForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.newOracionForm.get('titulo').value);
  }

}
