import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Saludo } from 'src/app/models/models';

@Component({
  selector: 'app-saludos-details',
  templateUrl: './saludos-details.component.html',
  styleUrls: ['./saludos-details.component.scss']
})
export class SaludosDetailsComponent implements OnInit {

  @Input() saludoInput: Saludo = {
      id: 0,
      titulo: '',
      texto: '',
      descripcion: '',
      enUso: 0,
      medios: []
  }

  detailSaludoForm: FormGroup;



  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.saludoInput = data.row;
    this.detailSaludoForm = this.fb.group({
      titulo: new FormControl(this.saludoInput.titulo),
      descripcion: new FormControl(this.saludoInput.descripcion),
      texto: new FormControl(this.saludoInput.texto),
      image: new FormControl(this.saludoInput.medios[0].url),
      video: new FormControl(this.saludoInput.medios[1].url),
      enUso: new FormControl(this.checkInUse(this.saludoInput.enUso))
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
    console.log('Titulo:' + this.detailSaludoForm.get('titulo').value);
  }

}
