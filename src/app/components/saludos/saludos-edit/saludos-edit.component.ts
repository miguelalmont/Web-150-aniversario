import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-saludos-edit',
  templateUrl: './saludos-edit.component.html',
  styleUrls: ['./saludos-edit.component.scss']
})
export class SaludosEditComponent implements OnInit {

  newSaludosForm: FormGroup = this.fb.group({
    titulo: new FormControl(''),
    contenido: new FormControl(''),
    descripcion: new FormControl(''),
    medios: new FormControl(''),
    enUso: new FormControl('')
  });

  saludos = {
    titulo: this.newSaludosForm.get('titulo').value,
    contenido: this.newSaludosForm.get('contenido').value,
    descripcion: this.newSaludosForm.get('descripcion').value,
    medios: this.newSaludosForm.get('medios').value,
    enUso: this.newSaludosForm.get('enUso').value
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newSaludosForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('titulo:' + this.newSaludosForm.get('titulo').value);
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
          'Saludo actualizado correctamente',
          'success'
        )
      }
    })
  }

}
