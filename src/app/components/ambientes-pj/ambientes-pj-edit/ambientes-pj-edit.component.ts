import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ambientes-pj-edit',
  templateUrl: './ambientes-pj-edit.component.html',
  styleUrls: ['./ambientes-pj-edit.component.scss']
})
export class AmbientesPjEditComponent implements OnInit {

  newAmbienteForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    video: new FormControl('',  Validators.required),
  });

  ambiente = {
    title: this.newAmbienteForm.get('title').value,
    video: this.newAmbienteForm.get('video').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newAmbienteForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newAmbienteForm.get('title').value);
  }

}
