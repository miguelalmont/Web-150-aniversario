import { Historia } from './../../../models/models';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historia-details',
  templateUrl: './historia-details.component.html',
  styleUrls: ['./historia-details.component.scss']
})
export class HistoriaDetailsComponent implements OnInit {

  @Input() historiaDetails: Historia = {
      titulo: '',
      subtitulo: '',
      descripcion: '',
      enUso: 0,
      medios: []
  }

  detailHistoriaForm: FormGroup;


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

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.historiaDetails = data.row;
    this.detailHistoriaForm = this.fb.group({
      titulo: new FormControl(this.historiaDetails.titulo),
      subtitulo: new FormControl(this.historiaDetails.subtitulo),
      descripcion: new FormControl(this.historiaDetails.descripcion),
      enUso: new FormControl(this.historiaDetails.enUso),
      medios: new FormControl(this.historiaDetails.medios)
    });
  }

  get title() { return this.newHistoriaForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newHistoriaForm.get('title').value);
  }

}
