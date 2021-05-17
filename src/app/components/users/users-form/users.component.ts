import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from 'src/app/shared/password-validator';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    firstname: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    lastname: new FormControl('',  Validators.required),
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.minLength(6), Validators.required]),
    passwordRepeat: new FormControl('', [Validators.required])
  }, {validators: passwordValidator});

  user = {
    firstname: this.newUserForm.get('firstname').value,
    lastname: this.newUserForm.get('lastname').value,
    email: this.newUserForm.get('email').value,
    password: this.newUserForm.get('password').value,
    passwordRepeat: this.newUserForm.get('passwordRepeat').value
  }

  constructor(private fb: FormBuilder) {}

  get firstname() { return this.newUserForm.get('firstname').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('firstname').value);
  }

}
