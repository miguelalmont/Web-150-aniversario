import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-p-actos-edit',
  templateUrl: './p-actos-edit.component.html',
  styleUrls: ['./p-actos-edit.component.scss']
})
export class PActosEditComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    category: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    date: new FormControl('',  Validators.required),
    image: new FormControl('', Validators.required)
  });

  user = {
    title: this.newUserForm.get('title').value,
    description: this.newUserForm.get('description').value,
    category: this.newUserForm.get('category').value,
    date: this.newUserForm.get('date').value,
    image: this.newUserForm.get('image').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newUserForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('title').value);
  }

}