import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-materiales-form',
  templateUrl: './materiales-form.component.html',
  styleUrls: ['./materiales-form.component.scss']
})
export class MaterialesFormComponent implements OnInit {

  newMaterialesForm: FormGroup = this.fb.group({
    firstname: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    lastname: new FormControl('',  Validators.required),
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.minLength(6), Validators.required]),
    passwordRepeat: new FormControl('', Validators.required)
  });

  materiales = {
    firstname: this.newMaterialesForm.get('firstname').value,
    lastname: this.newMaterialesForm.get('lastname').value,
    email: this.newMaterialesForm.get('email').value,
    password: this.newMaterialesForm.get('password').value,
    passwordRepeat: this.newMaterialesForm.get('passwordRepeat').value
  }

  constructor(private fb: FormBuilder) {}

  get firstname() { return this.newMaterialesForm.get('firstname').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newMaterialesForm.get('firstname').value);
  }

}