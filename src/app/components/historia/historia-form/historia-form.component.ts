import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historia-form',
  templateUrl: './historia-form.component.html',
  styleUrls: ['./historia-form.component.scss']
})
export class HistoriaFormComponent implements OnInit {

  newHistoriaForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitle: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', Validators.required)
  });

  historia = {
    title: this.newHistoriaForm.get('title').value,
    subtitle: this.newHistoriaForm.get('subtitle').value,
    description: this.newHistoriaForm.get('description').value,
    image: this.newHistoriaForm.get('image').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newHistoriaForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newHistoriaForm.get('title').value);
  }

}