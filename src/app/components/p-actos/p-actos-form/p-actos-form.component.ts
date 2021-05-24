import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-p-actos-form',
  templateUrl: './p-actos-form.component.html',
  styleUrls: ['./p-actos-form.component.scss']
})
export class PActosFormComponent implements OnInit {

  newActosForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    category: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    date: new FormControl('',  Validators.required),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  acto = {
    title: this.newActosForm.get('title').value,
    description: this.newActosForm.get('description').value,
    category: this.newActosForm.get('category').value,
    date: this.newActosForm.get('date').value,
    enUso: this.newActosForm.get('enUso').value,
    medios: this.newActosForm.get('medios').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newActosForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newActosForm.get('title').value);
  }

}