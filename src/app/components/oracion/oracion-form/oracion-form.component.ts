import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-oracion-form',
  templateUrl: './oracion-form.component.html',
  styleUrls: ['./oracion-form.component.scss']
})
export class OracionFormComponent implements OnInit {

  newOracionForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('',  Validators.required)
    
  });

  oracion = {
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value,
    enUso: this.newOracionForm.get('enUso').value
    
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newOracionForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newOracionForm.get('titulo').value);
  }

}
