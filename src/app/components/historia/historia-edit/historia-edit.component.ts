import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historia-edit',
  templateUrl: './historia-edit.component.html',
  styleUrls: ['./historia-edit.component.scss']
})
export class HistoriaEditComponent implements OnInit {

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
