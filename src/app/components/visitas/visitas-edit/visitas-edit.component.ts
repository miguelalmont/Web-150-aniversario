import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Visita } from 'src/app/models/models';
import Swal from "sweetalert2";

@Component({
  selector: 'app-visitas-edit',
  templateUrl: './visitas-edit.component.html',
  styleUrls: ['./visitas-edit.component.scss']
})
export class VisitasEditComponent implements OnInit {

  @Input()
  visitaEdit: Visita = {
    titulo: '',
    descripcion: '',
    enUso: 0,
    medios: []
  }

  visitaEditForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.visitaEdit = data.row;
    this.visitaEditForm = this.fb.group({
    titulo: new FormControl(this.visitaEdit.titulo),
    descripcion: new FormControl(this.visitaEdit.descripcion),
    enUso: new FormControl(this.visitaEdit.enUso),
    image: new FormControl(this.visitaEdit.medios[0].url),
    video: new FormControl(this.visitaEdit.medios[1].url)
    })
  }

  get titulo() { return this.visitaEditForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.visitaEditForm.get('titulo').value);
  }

  checkInUse(inUse: number) {
    if (inUse == 1)
      return true;
    else
      return false;
  }

  editarSwt(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Perfecto',
          'Ambiente actualizado correctamente',
          'success'
        )
      }
    })
  }

}
