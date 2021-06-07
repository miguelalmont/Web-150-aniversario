import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-historia-edit',
  templateUrl: './historia-edit.component.html',
  styleUrls: ['./historia-edit.component.scss']
})
export class HistoriaEditComponent implements OnInit {

  newHistoriaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    medios: new FormControl('', Validators.required),
    enUso: new FormControl('', Validators.required)
  });

  historia = {
    titulo: this.newHistoriaForm.get('titulo').value,
    subtitulo: this.newHistoriaForm.get('subtitulo').value,
    descripcion: this.newHistoriaForm.get('descripcion').value,
    medios: this.newHistoriaForm.get('medios').value
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newHistoriaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newHistoriaForm.get('titulo').value);
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
          'Historia actualizada correctamente',
          'success'
        )
      }
    })
  }

}
