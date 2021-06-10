import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ambientesPj } from 'src/app/models/models';
@Component({
  selector: 'app-ambientes-pj-details',
  templateUrl: './ambientes-pj-details.component.html',
  styleUrls: ['./ambientes-pj-details.component.scss']
})
export class AmbientesPjDetailsComponent implements OnInit {

  @Input()
  ambienteInput: ambientesPj = {
    id: 0,
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  }

  newAmbienteForm: FormGroup = this.fb.group({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    video: new FormControl('')
  });
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.ambienteInput = data.row;
    console.log(this.ambienteInput)
    if (this.data.row.medios != undefined || this.data.row.descripcion != undefined || this.data.row.medios != null || this.data.row.descripcion != null) {
      this.newAmbienteForm = this.fb.group({
        titulo: new FormControl(this.data.row.titulo, [Validators.required]),
        descripcion: new FormControl(this.data.row.descripcion, [Validators.required]),
        video: new FormControl(this.data.row.medios[0].url)
      });
    } else {
      this.newAmbienteForm = this.fb.group({
        titulo: new FormControl(this.data.row.titulo, [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        video: new FormControl('')
      });
    }
  }

  ngOnInit(): void {}

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

}
