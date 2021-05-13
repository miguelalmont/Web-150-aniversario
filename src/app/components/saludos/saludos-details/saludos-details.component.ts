import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-saludos-details',
  templateUrl: './saludos-details.component.html',
  styleUrls: ['./saludos-details.component.scss']
})
export class SaludosDetailsComponent implements OnInit {

  newSaludosForm: FormGroup = this.fb.group({
    title: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    video: new FormControl('')
  });

  saludos = {
    title: this.newSaludosForm.get('title').value,
    content: this.newSaludosForm.get('content').value,
    image: this.newSaludosForm.get('image').value,
    description: this.newSaludosForm.get('description').value,
    video: this.newSaludosForm.get('video').value
  }

  constructor(private fb: FormBuilder) {}

  get firstname() { return this.newSaludosForm.get('firstname').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newSaludosForm.get('firstname').value);
  }
}
