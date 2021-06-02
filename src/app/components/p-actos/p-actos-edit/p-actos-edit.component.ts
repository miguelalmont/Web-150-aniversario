import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActoData } from 'src/app/models/models';
import { PActoService } from 'src/app/services/p-acto-service/p-acto.service';


@Component({
  selector: 'app-p-actos-edit',
  templateUrl: './p-actos-edit.component.html',
  styleUrls: ['./p-actos-edit.component.scss']
})


export class PActosEditComponent implements OnInit {

  @Input() actoInput: ActoData = {
    id: 0,
    titulo: '',
    descripcion: '',
    categoria: '',
    ubicacion: '',
    fecha: '',
    medios: [],
    enUso: 0
}

  newActosForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    categoria: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    ubicacion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    fecha: new FormControl('',  Validators.required),
    medios: new FormControl('', Validators.required),
    enUso: new FormControl('', Validators.required)
  });

  acto = {
    id: this.actoInput.id,
    titulo: this.newActosForm.get('titulo').value,
    descripcion: this.newActosForm.get('descripcion').value,
    categoria: this.newActosForm.get('categoria').value,
    ubicacion: this.newActosForm.get('ubicacion').value,
    fecha: this.newActosForm.get('fecha').value,
    enUso: this.newActosForm.get('enUso').value,
    medios: this.newActosForm.get('medios').value
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private actoService: PActoService) {
    this.actoInput = data.row;
    this.newActosForm = this.fb.group({
      titulo: new FormControl(this.actoInput.titulo),
      descripcion: new FormControl(this.actoInput.descripcion),
      categoria: new FormControl(this.actoInput.categoria),
      ubicacion: new FormControl(this.actoInput.descripcion),
      fecha: new FormControl(this.actoInput.fecha),
      medios: new FormControl(this.actoInput.medios),
      enUso: new FormControl(this.actoInput.enUso)
    });
  }

  get title() { return this.newActosForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.acto = {
      id: this.data.row.id,
      titulo: this.newActosForm.get('titulo').value,
      descripcion: this.newActosForm.get('descripcion').value,
      categoria: this.newActosForm.get('categoria').value,
      ubicacion: this.newActosForm.get('ubicacion').value,
      fecha: this.newActosForm.get('fecha').value,
      medios: this.newActosForm.get('medios').value,
      enUso: this.newActosForm.get('enUso').value
    }
    this.actoService.updateActo(this.acto).subscribe(
      res => console.log("formulario editado"),
      error => console.log(error)
    );
  }

}