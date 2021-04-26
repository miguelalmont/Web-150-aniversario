import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historia-form',
  templateUrl: './historia-form.component.html',
  styleUrls: ['./historia-form.component.scss']
})
export class HistoriaFormComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitle: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', Validators.required)
  });

  user = {
    title: this.newUserForm.get('title').value,
    subtitle: this.newUserForm.get('subtitle').value,
    description: this.newUserForm.get('description').value,
    image: this.newUserForm.get('image').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newUserForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('title').value);
  }

}