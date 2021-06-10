import { Component, Inject, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Historia } from 'src/app/models/models';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';
import { HistoriaViewComponent } from '../historia-view/historia-view.component';

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

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private historiaService: HistoriaService,
  public dialogRef: MatDialogRef<HistoriaViewComponent>) {
    this.historiaInput = data.row;
    this.newHistoriaForm = this.fb.group({
      titulo: new FormControl(this.historiaInput.titulo),
      subtitulo: new FormControl(this.historiaInput.subtitulo),
      descripcion: new FormControl(this.historiaInput.descripcion),
      enUso: new FormControl(this.checkEnUso(this.historiaInput.enUso)),
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
      enUso: this.unCheckEnUso(this.data.row.enUso),
      medios: this.newHistoriaForm.get('medios').value
    }
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Vas a editar una Historia",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Editar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.historiaService.editHistoria(this.historia).subscribe(
          response => {
            console.log('Historia editar', response)
            Swal.fire(
              'Perfecto',
              'Historia editada correctamente',
              'success'
            )
            this.dialogRef.close()
          },
          error => {
            console.error('Error ', error)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al editar',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
            this.dialogRef.close()
          }
        );
      }
    })
  }

  checkEnUso(enUso: number) {
    if (enUso === 1)
      return true;
    else
      return false;
  }

  unCheckEnUso(enUso: boolean) {
    if (enUso)
      return 1;
    else
      return 2;
  }

}
