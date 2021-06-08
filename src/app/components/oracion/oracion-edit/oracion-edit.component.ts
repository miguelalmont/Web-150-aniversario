import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Oracion } from 'src/app/models/models';
import { OracionService } from 'src/app/services/oracion-service/oracion.service';
import { Inject } from '@angular/core';
import Swal from "sweetalert2";
import { OracionViewComponent } from '../oracion-view/oracion-view.component';

@Component({
  selector: 'app-oracion-edit',
  templateUrl: './oracion-edit.component.html',
  styleUrls: ['./oracion-edit.component.scss']
})
export class OracionEditComponent implements OnInit {

  @Input() oracionInput: Oracion = {
    id: 0,
    titulo: '',
    oracion: '',
    enUso: 0
}

  newOracionForm: FormGroup = this.fb.group({

    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    oracion: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    enUso: new FormControl('',  Validators.required)
    
  });

  oracion = {
    id: this.oracionInput.id,
    titulo: this.newOracionForm.get('titulo').value,
    oracion: this.newOracionForm.get('oracion').value,
    enUso: this.newOracionForm.get('enUso').value
    
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private oracionService: OracionService,
  public dialogRef: MatDialogRef<OracionViewComponent>) {
    this.oracionInput = data.row;
    this.newOracionForm = this.fb.group({
      titulo: new FormControl(this.oracionInput.titulo),
      oracion: new FormControl(this.oracionInput.oracion),
      enUso: new FormControl(this.oracionInput.enUso)
    });
  }

  get titulo() { return this.newOracionForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.oracion = {
      id: this.data.row.id,
      titulo: this.newOracionForm.get('titulo').value,
      oracion: this.newOracionForm.get('oracion').value,
      enUso: this.newOracionForm.get('enUso').value
    }
    this.oracionService.editOracion(this.oracion).subscribe(
      res => {
        console.log("formulario editado")
        this.dialogRef.close();
      },
      error => {
        console.log(error)
        this.dialogRef.close();
      }
    );
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
          'Oracion actualizada correctamente',
          'success'
        )
      }
    })
  }

}
