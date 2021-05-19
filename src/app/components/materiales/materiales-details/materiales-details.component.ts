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

  @Input() materialDetails: Material = {
      titulo: '',
      contenido: '',
      enUso: 0,
      medios: []
  }

  detailMaterialForm: FormGroup;


  newMaterialForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    contenido: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  historia = {
    titulo: this.newMaterialForm.get('titulo').value,
    contenido: this.newMaterialForm.get('contenido').value,
    enUso: this.newMaterialForm.get('enUso').value,
    medios: this.newMaterialForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.materialDetails = data.row;
    this.detailMaterialForm = this.fb.group({
      titulo: new FormControl(this.materialDetails.titulo),
      contenido: new FormControl(this.materialDetails.contenido),
      enUso: new FormControl(this.materialDetails.enUso),
      medios: new FormControl(this.materialDetails.medios)
    });
  }

  get titulo() { return this.newMaterialForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.newMaterialForm.get('titulo').value);
  }

}
