import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-p-actos-form',
  templateUrl: './p-actos-form.component.html',
  styleUrls: ['./p-actos-form.component.scss']
})
export class PActosFormComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(10)]),
    category: new FormControl('',  [Validators.required]),
    date: new FormControl('',  [Validators.required]),
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
