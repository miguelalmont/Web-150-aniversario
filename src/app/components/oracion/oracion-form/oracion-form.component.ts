import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-oracion-form',
  templateUrl: './oracion-form.component.html',
  styleUrls: ['./oracion-form.component.scss']
})
export class OracionFormComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    prayer: new FormControl('',  [Validators.required, Validators.minLength(6)])
    
  });

  user = {
    title: this.newUserForm.get('title').value,
    prayer: this.newUserForm.get('prayer').value
    
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newUserForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('title').value);
  }

}
