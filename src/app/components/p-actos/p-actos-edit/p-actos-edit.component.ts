import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActoData } from 'src/app/models/models';
import { PActoService } from 'src/app/services/p-acto-service/p-acto.service';
import { PActosViewComponent } from '../p-actos-view/p-actos-view.component';


@Component({
  selector: 'app-p-actos-edit',
  templateUrl: './p-actos-edit.component.html',
  styleUrls: ['./p-actos-edit.component.scss']
})


export class PActosEditComponent implements OnInit {

  checked: boolean = false;

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

  actosFormEdit: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private actoService: PActoService,
  public dialogRef: MatDialogRef<PActosViewComponent>) {
    this.actoInput = data.row;
    this.actosFormEdit = this.fb.group({
      titulo: new FormControl(this.actoInput.titulo, Validators.required),
      descripcion: new FormControl(this.actoInput.descripcion),
      categoria: new FormControl(this.actoInput.categoria),
      ubicacion: new FormControl(this.actoInput.descripcion),
      fecha: new FormControl(this.actoInput.fecha),
      image: new FormControl(this.actoInput.medios[0].url),
      video: new FormControl(this.actoInput.medios[1].url),
      enUso: this.checkInUse(this.actoInput.enUso)
    });
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

  onFormSubmit() {
    this.actoInput = {
      id: this.data.row.id,
      titulo: this.actosFormEdit.get('titulo').value,
      descripcion: this.actosFormEdit.get('descripcion').value,
      categoria: this.actosFormEdit.get('categoria').value,
      ubicacion: this.actosFormEdit.get('ubicacion').value,
      fecha: this.actosFormEdit.get('fecha').value,
      medios: [{ url: this.actosFormEdit.get('image').value }, { url: this.actosFormEdit.get('video').value }],
      enUso: this.unCheckInUse(this.actosFormEdit.get('enUso').value)
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actoService.deleteActos(this.actoInput).subscribe(
          res => {
            console.log("usuario editado", res, this.actoInput)
            Swal.fire(
              'Perfecto',
              'Usuario actualizado correctamente',
              'success'
            )
            this.dialogRef.close();
          },
          error => {
            console.error(error, "Error", this.actoInput)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al editar',
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