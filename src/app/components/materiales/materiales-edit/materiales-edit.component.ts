import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-materiales-edit',
  templateUrl: './materiales-edit.component.html',
  styleUrls: ['./materiales-edit.component.scss']
})
export class MaterialesEditComponent implements OnInit {

  newMaterialesForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    contenido: new FormControl('',  Validators.required),
    medios: new FormControl('',  Validators.required)
  });

  materiales = {
    titulo: this.newMaterialesForm.get('titulo').value,
    contenido: this.newMaterialesForm.get('contenido').value,
    medios: this.newMaterialesForm.get('medios').value
  }

  constructor(private fb: FormBuilder) {}

  get titulp() { return this.newMaterialesForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newMaterialesForm.get('titulo').value);
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
          'Material actualizado correctamente',
          'success'
        )
      }
    })
  }

}
