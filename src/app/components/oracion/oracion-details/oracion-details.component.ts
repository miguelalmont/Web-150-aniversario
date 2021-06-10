import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oracion } from 'src/app/models/models';
import { OracionService } from 'src/app/services/oracion-service/oracion.service';

@Component({
  selector: 'app-oracion-details',
  templateUrl: './oracion-details.component.html',
  styleUrls: ['./oracion-details.component.scss']
})
export class OracionDetailsComponent implements OnInit {

  @Input() oracionDetails: Oracion = {
      titulo: '',
      oracion: '',
      enUso: 0
  }

  detailOracionForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data,private oracionService: OracionService) {
    this.oracionDetails = data.row;
    this.detailOracionForm = this.fb.group({
      titulo: new FormControl(this.oracionDetails.titulo),
      oracion: new FormControl(this.oracionDetails.oracion),
      enUso: new FormControl(this.checkEnUso(this.oracionDetails.enUso))
    });
  }

  get titulo() { return this.detailOracionForm.get('titulo').value; }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormSubmit(): void {
    console.log('Titulo:' + this.detailOracionForm.get('titulo').value);
  }

  checkEnUso(enUso: number) {
    if (enUso == 1)
      return true;
    else
      return false;
  }

}
