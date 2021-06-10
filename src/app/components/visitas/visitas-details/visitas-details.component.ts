import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Visita } from 'src/app/models/models';

@Component({
  selector: 'app-visitas-details',
  templateUrl: './visitas-details.component.html',
  styleUrls: ['./visitas-details.component.scss']
})
export class VisitasDetailsComponent implements OnInit {

  @Input() visitaDetails: Visita = {
      titulo: '',
      descripcion: '',
      enUso: 0,
      medios: []
  }

  detailVisitaForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.visitaDetails = data.row;
    this.detailVisitaForm = this.fb.group({
    titulo: new FormControl(this.visitaDetails.titulo),
    descripcion: new FormControl(this.visitaDetails.descripcion),
    enUso: new FormControl(this.visitaDetails.enUso),
    image: new FormControl(this.visitaDetails.medios[0].url),
    video: new FormControl(this.visitaDetails.medios[1].url)
    })
  }

  get titulo() { return this.detailVisitaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Titulo:' + this.detailVisitaForm.get('titulo').value);
  }

  checkInUse(inUse: number) {
    if (inUse == 1)
      return true;
    else
      return false;
  }

}
