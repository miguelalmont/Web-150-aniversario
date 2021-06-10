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

  newMaterialesForm: FormGroup;

  materiales = {
    titulo: '',
    contenido: '',
    medios : [],
    enUso: 0,
  }

  constructor(private fb: FormBuilder, private materialesService: MaterialesService) {
    this.newMaterialesForm = this.fb.group({
      titulo: new FormControl(''),
      contenido: new FormControl(''),
      image: new FormControl(''),
      video: new FormControl(''),
      audio: new FormControl(''),
      enUso: new FormControl(''),
    })
  }

  ngOnInit(): void {}

  onFormSubmit(): void {

    this.materiales = {
      titulo: this.newMaterialesForm.get('titulo').value,
      contenido: this.newMaterialesForm.get('contenido').value,
      medios: [{ url: this.newMaterialesForm.get('image').value }, {url: this.newMaterialesForm.get('video').value}, { url: this.newMaterialesForm.get('audio').value }],
      enUso: this.materiales.enUso
    }

    Swal.fire({
      title: '¿Estas seguro?',
      text: "Vas a crear una entrada de materiales",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Crear'
    }).then((result) => {
      if (result.isConfirmed) {
        this.materialesService.createMaterial(this.materiales).subscribe(
          response => {
            console.log('Material insertado ', response)
            Swal.fire(
              'Perfecto',
              'Material creado correctamente',
              'success'
            )
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
    })

  }

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
