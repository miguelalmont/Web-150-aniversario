import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ambientes-pj-form',
  templateUrl: './ambientes-pj-form.component.html',
  styleUrls: ['./ambientes-pj-form.component.scss']
})
export class AmbientesPjFormComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    video: new FormControl('',  Validators.required),
  });

  user = {
    title: this.newUserForm.get('title').value,
    video: this.newUserForm.get('video').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newUserForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('title').value);
  }

}
