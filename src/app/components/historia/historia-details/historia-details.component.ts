import { Historia } from './../../../models/models';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';

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




  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private historiaService: HistoriaService) {
    this.historiaDetails = data.row;
    this.detailHistoriaForm = this.fb.group({
      titulo: new FormControl(this.historiaDetails.titulo),
      subtitulo: new FormControl(this.historiaDetails.subtitulo),
      descripcion: new FormControl(this.historiaDetails.descripcion),
      enUso: new FormControl(this.checkEnUso(this.historiaDetails.enUso)),
      medios: new FormControl(this.historiaDetails.medios)
    });
  }
  ngOnInit(): void {
  }

  get titulo() { return this.detailHistoriaForm.get('titulo').value; }

  ngOnDestroy(): void {
  }

  

  onFormSubmit(): void {
    console.log('Name:' + this.detailHistoriaForm.get('titulo').value);
  }

  checkEnUso(enUso: number) {
    if (enUso == 1)
      return true;
    else
      return false;
  }

}
