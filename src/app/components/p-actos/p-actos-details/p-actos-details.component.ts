import { Component, Inject, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActoData } from 'src/app/models/models';


@Component({
  selector: 'app-p-actos-details',
  templateUrl: './p-actos-details.component.html',
  styleUrls: ['./p-actos-details.component.scss']
})
export class PActosDetailsComponent implements OnInit {

  @Input() actoInput: ActoData = {
    id: 0,
    titulo: '',
    descripcion: '',
    categoria: '',
    ubicacion: '',
    fecha: '',
    medios: [],
    enUso: 0
  }

  newActosForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.actoInput = data.row;
    this.newActosForm = this.fb.group({
      titulo: new FormControl(this.actoInput.titulo),
      descripcion: new FormControl(this.actoInput.descripcion),
      categoria: new FormControl(this.actoInput.categoria),
      ubicacion: new FormControl(this.actoInput.descripcion),
      fecha: new FormControl(this.actoInput.fecha),
      image: new FormControl(this.actoInput.medios[0].url),
      video: new FormControl(this.actoInput.medios[1].url),
      enUso: new FormControl(this.checkInUse(this.actoInput.enUso))
    });
  }

  checkInUse(inUse: number) {
    if (inUse == 1)
      return true;
    else
      return false;
  }

  unCheckInUse(enUso: boolean) {
    if (enUso)
      return 1;
    else
      return 0;
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newActosForm.get('title').value);
  }

}