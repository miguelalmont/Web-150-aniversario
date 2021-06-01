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


  newHistoriaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('', Validators.required),
    medios: new FormControl('', Validators.required)
  });

  historia: Historia = {
    titulo: this.newHistoriaForm.get('titulo').value,
    subtitulo: this.newHistoriaForm.get('subtitulo').value,
    descripcion: this.newHistoriaForm.get('descripcion').value,
    enUso: this.newHistoriaForm.get('enUso').value,
    medios: this.newHistoriaForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private historiaService: HistoriaService) {
    this.historiaDetails = data.row;
    this.detailHistoriaForm = this.fb.group({
      titulo: new FormControl(this.historiaDetails.titulo),
      subtitulo: new FormControl(this.historiaDetails.subtitulo),
      descripcion: new FormControl(this.historiaDetails.descripcion),
      enUso: new FormControl(this.historiaDetails.enUso),
      medios: new FormControl(this.historiaDetails.medios)
    });
  }

  get titulo() { return this.newHistoriaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {  }

}
