import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-oracion-edit',
  templateUrl: './oracion-edit.component.html',
  styleUrls: ['./oracion-edit.component.scss']
})
export class OracionEditComponent implements OnInit {

  newOracionForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('',  [Validators.required, Validators.minLength(6)])
    
  });

  oracion = {
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value
    
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newOracionForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newOracionForm.get('titulo').value);
  }

}
