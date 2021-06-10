import { PActosViewComponent } from './../p-actos-view/p-actos-view.component';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActoData } from 'src/app/models/models';
import { PActoService } from 'src/app/services/p-acto-service/p-acto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-p-actos-form',
  templateUrl: './p-actos-form.component.html',
  styleUrls: ['./p-actos-form.component.scss']
})
export class PActosFormComponent implements OnInit {

  newActosForm: FormGroup;

  acto: ActoData = {
    titulo: '',
    descripcion: '',
    categoria: '',
    ubicacion: '',
    fecha: '',
    medios: [],
    enUso: 0
  }

  constructor(private fb: FormBuilder, private actoService: PActoService, 
    public dialogRef: MatDialogRef<PActosViewComponent>) { 
    this.newActosForm = this.fb.group({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      categoria: new FormControl(''),
      ubicacion: new FormControl(''),
      fecha: new FormControl(''),
      image: new FormControl(''),
      video: new FormControl('')
    });
  }

  get title() { return this.newActosForm.get('title').value; }

  ngOnInit(): void { }

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

  onFormSubmit() {
    this.acto = {
      titulo: this.newActosForm.get('titulo').value,
      descripcion: this.newActosForm.get('descripcion').value,
      categoria: this.newActosForm.get('categoria').value,
      ubicacion: this.newActosForm.get('ubicacion').value,
      fecha: this.newActosForm.get('fecha').value,
      medios: [{ url: this.newActosForm.get('image').value }, { url: this.newActosForm.get('video').value }],
      enUso: this.acto.enUso
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Insertar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actoService.createActos(this.acto).subscribe(
          res => {
            console.log("Acto insertado", res, this.acto)
            Swal.fire(
              'Perfecto',
              'Acto insertado correctamente',
              'success'
            )
            this.dialogRef.close();
          },
          error => {
            console.error(error, "Error", this.acto)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al insertar',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
            this.dialogRef.close();
          }
        );
      }
    })
  }
}
