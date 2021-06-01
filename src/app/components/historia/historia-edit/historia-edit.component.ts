import { Component, Inject, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Historia } from 'src/app/models/models';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';

@Component({
  selector: 'app-historia-edit',
  templateUrl: './historia-edit.component.html',
  styleUrls: ['./historia-edit.component.scss']
})
export class HistoriaEditComponent implements OnInit {

  @Input() historiaInput: Historia = {
    id: 0,
    titulo: '',
    subtitulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
}

  newHistoriaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    medios: new FormControl('', Validators.required),
    enUso: new FormControl('', Validators.required)
  });

  historia = {
    id: this.historiaInput.id,
    titulo: this.newHistoriaForm.get('titulo').value,
    subtitulo: this.newHistoriaForm.get('subtitulo').value,
    descripcion: this.newHistoriaForm.get('descripcion').value,
    enUso: 0,
    medios: this.newHistoriaForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private historiaService: HistoriaService) {
    this.historiaInput = data.row;
    this.newHistoriaForm = this.fb.group({
      titulo: new FormControl(this.historiaInput.titulo),
      subtitulo: new FormControl(this.historiaInput.subtitulo),
      descripcion: new FormControl(this.historiaInput.descripcion),
      enUso: new FormControl(this.historiaInput.enUso),
      medios: new FormControl(this.historiaInput.medios)
    });
  }

  get titulo() { return this.newHistoriaForm.get('titulo').value; }

  ngOnInit(): void {
    
  }

  onFormSubmit(): void {
    this.historia = {
      id: this.data.row.id,
      titulo: this.newHistoriaForm.get('titulo').value,
      subtitulo: this.newHistoriaForm.get('subtitulo').value,
      descripcion: this.newHistoriaForm.get('descripcion').value,
      enUso: this.newHistoriaForm.get('enUso').value,
      medios: this.newHistoriaForm.get('medios').value
    }
    this.historiaService.updateHistoria(this.historia).subscribe();
  }

}
