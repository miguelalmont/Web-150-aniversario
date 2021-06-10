import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Material } from 'src/app/models/models';

@Component({
  selector: 'app-materiales-details',
  templateUrl: './materiales-details.component.html',
  styleUrls: ['./materiales-details.component.scss']
})
export class MaterialesDetailsComponent implements OnInit {

  @Input() materialInput: Material = {
    titulo: '',
    contenido: '',
    medios : [],
    enUso: 0,
  }

  detailMaterialForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.materialInput = data.row;
    this.detailMaterialForm = this.fb.group({
      titulo: new FormControl(this.materialInput.titulo),
      contenido: new FormControl(this.materialInput.contenido),
      fotos: new FormControl(this.materialInput.medios[0].url),
      video: new FormControl(this.materialInput.medios[1].url),
      audio: new FormControl(this.materialInput.medios[2].url),
      enUso: new FormControl(this.checkInUse(this.materialInput.enUso)),
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
    console.log('Titulo:' + this.detailMaterialForm.get('titulo').value);
  }



}
