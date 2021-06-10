import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MaterialesService } from 'src/app/services/materiales-service/materiales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materiales-form',
  templateUrl: './materiales-form.component.html',
  styleUrls: ['./materiales-form.component.scss']
})
export class MaterialesFormComponent implements OnInit {

  newMaterialesForm: FormGroup = this.fb.group({
    tipo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    url: new FormControl('',  [Validators.required, Validators.minLength(10)]),
    enUso: new FormControl('',  Validators.required)
  });

  materiales = {
    tipo: this.newMaterialesForm.get('tipo').value,
    url: this.newMaterialesForm.get('url').value,
    enUso: this.newMaterialesForm.get('enUso').value
  }

  constructor(private fb: FormBuilder, private materialesService: MaterialesService) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    
    this.materiales = {
      tipo: this.newMaterialesForm.get('tipo').value,
      url: this.newMaterialesForm.get('url').value,
      enUso: this.newMaterialesForm.get('enUso').value
    }

    console.log('Name:' + this.newMaterialesForm.get('username').value);
    this.materialesService.createMaterial(this.materiales).subscribe(
      response => {
        console.log('Usuario insertado ', response)
        Swal.fire({
          title: '¿Estas seguro?',
          text: "Vas a crear un usuario",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cancelar",
          confirmButtonText: 'Crear'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Perfecto',
              'Usuario creado correctamente',
              'success'
            )
          }
        })
      },
      error => {
        console.error('Error ', error)
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al crear',
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cerrar",
        })
      }
    );

  }

  checkUse(){
    if(this.newMaterialesForm.get('enUso').value == true){
      this.materiales.enUso = 1
      console.log(this.materiales.enUso)
    }else{
      this.materiales.enUso = 0;
      console.log(this.materiales.enUso)
    }
  }



}