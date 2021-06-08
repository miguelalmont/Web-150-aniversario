import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Oracion } from 'src/app/models/models';

@Component({
  selector: 'app-oracion-details',
  templateUrl: './oracion-details.component.html',
  styleUrls: ['./oracion-details.component.scss'],
})
export class OracionDetailsComponent implements OnInit {
  @Input() oracionInput: Oracion = {
    id: 0,
    titulo: '',
    oracion: '',
    enUso: 0,
  };

  newOracionForm: FormGroup = this.fb.group({
    titulo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    enUso: new FormControl('', Validators.required),
  });

  oracion = {
    id: this.oracionInput.id,
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value,
    enUso: this.newOracionForm.get('enUso').value,
  };

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.oracionInput = data.row;
    this.newOracionForm = this.fb.group({
      titulo: new FormControl(this.oracionInput.titulo),
      oracion: new FormControl(this.oracionInput.oracion),
      enUso: new FormControl(this.oracionInput.enUso),
    });
  }

  get titulo() {
    return this.newOracionForm.get('titulo').value;
  }

  checkUso: boolean;

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log(this.newOracionForm);
  }

  checkEnUso(enUso: number): boolean {
    return enUso === 0 ? false : true;
  }
}
