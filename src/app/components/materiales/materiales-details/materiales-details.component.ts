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
      url: '',
      tipo: 0,
      enUso: 0
  }

  detailMaterialForm: FormGroup;
  
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.materialDetails = data.row;
    this.detailMaterialForm = this.fb.group({
      url: new FormControl(this.materialDetails.url),
      tipo: new FormControl(this.materialDetails.tipo),
      enUso: new FormControl(this.materialDetails.enUso)
    });
  }

  get titulo() { return this.detailMaterialForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.detailMaterialForm.get('titulo').value);
  }

  checkInUse(inUse: number) {
    if (inUse == 1)
      return true;
    else
      return false;
  }

}
