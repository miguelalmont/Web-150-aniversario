import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialesService } from 'src/app/services/materiales-service/materiales.service';
import { Material } from 'src/app/models/models';
import Swal from "sweetalert2";
import { MaterialesViewComponent } from '../materiales-view/materiales-view.component';

@Component({
  selector: 'app-materiales-edit',
  templateUrl: './materiales-edit.component.html',
  styleUrls: ['./materiales-edit.component.scss']
})
export class MaterialesEditComponent implements OnInit {

  checked: boolean = false;

  @Input()
  materialInput: Material = {
    titulo: '',
    contenido: '',
    url : '',
    enUso: 0,
}

  newMaterialesForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private materialService: MaterialesService,
  public dialogRef: MatDialogRef<MaterialesViewComponent>) {

    this.materialInput = data.row;
    this.checked = this.checkInUse(this.materialInput.enUso)
    this.newMaterialesForm = this.fb.group({
      titulo: new FormControl(this.materialInput.titulo),
      contenido: new FormControl(this.materialInput.contenido),
      url: new FormControl(this.materialInput.url),
      enUso: this.checked
    });
  }
  ngOnInit(): void {  }

  onFormSubmit(): void {

    this.materialInput = {
      titulo: this.newMaterialesForm.get('titulo').value,
      contenido: this.newMaterialesForm.get('contenido').value,
      url: this.newMaterialesForm.get('url').value,
      enUso: this.unCheckInUse(this.newMaterialesForm.get('enUso').value)
    }

    this.materialService.editMaterial(this.materialInput).subscribe(
      res => {
        console.log("usuario editado", res, this.materialInput)
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Los cambios no se podrán revertir",
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
            this.dialogRef.close();
          }
        })
      },
      error => {
        console.error(error, "Error", this.materialInput)
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
