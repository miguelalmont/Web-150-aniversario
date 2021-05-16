import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-oracion-edit',
  templateUrl: './oracion-edit.component.html',
  styleUrls: ['./oracion-edit.component.scss']
})
export class OracionEditComponent implements OnInit {

  newOracionForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    prayer: new FormControl('',  [Validators.required, Validators.minLength(6)])
    
  });

  oracion = {
    title: this.newOracionForm.get('title').value,
    prayer: this.newOracionForm.get('prayer').value
    
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newOracionForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newOracionForm.get('title').value);
  }

}
