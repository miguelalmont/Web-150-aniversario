import { HistoriaViewComponent } from './../historia-view/historia-view.component';
import { HistoriaService } from 'src/app/services/historia-service/historia.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-historia-form',
  templateUrl: './historia-form.component.html',
  styleUrls: ['./historia-form.component.scss']
})
export class HistoriaFormComponent implements OnInit {

  checked: boolean = false;

  newHistoriaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    subtitulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    descripcion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    medios: new FormControl('', Validators.required),
    enUso: this.checked
  });

  historia = {
    titulo: this.newHistoriaForm.get('titulo').value,
    subtitulo: this.newHistoriaForm.get('subtitulo').value,
    descripcion: this.newHistoriaForm.get('descripcion').value,
    medios: this.newHistoriaForm.get('medios').value,
    enUso: this.newHistoriaForm.get('enUso').value
  }

  constructor(private fb: FormBuilder, private historiaService: HistoriaService,
    public dialogRef: MatDialogRef<HistoriaViewComponent> ) {}

  get titulo() { return this.newHistoriaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.historia = {
    titulo: this.newHistoriaForm.get('titulo').value,
    subtitulo: this.newHistoriaForm.get('subtitulo').value,
    descripcion: this.newHistoriaForm.get('descripcion').value,
    medios: this.newHistoriaForm.get('medios').value,
    enUso: this.unCheckEnUso(this.newHistoriaForm.get('enUso').value)
  }
  console.log('Name:' + this.newHistoriaForm.get('titulo').value);
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Vas a crear una Historia",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: "Cancelar",
    confirmButtonText: 'Crear'
  }).then((result) => {
    if (result.isConfirmed) {
      this.historiaService.createHistoria(this.historia).subscribe(
        response => {
          console.log('Historia insertada', response)
          Swal.fire(
            'Perfecto',
            'Historia creada correctamente',
            'success'
          )
          this.dialogRef.close()
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
      return 0;
  }

}