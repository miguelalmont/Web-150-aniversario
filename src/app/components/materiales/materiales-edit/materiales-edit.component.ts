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

  @Input()
  materialInput: Material = {
    titulo: '',
    contenido: '',
    medios : [],
    enUso: 0,
}

  newMaterialesForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private materialService: MaterialesService,
  public dialogRef: MatDialogRef<MaterialesViewComponent>) {

    this.materialInput = data.row;
    console.log("editar tabla" ,this.materialInput)
    this.newMaterialesForm = this.fb.group({
      titulo: new FormControl(this.materialInput.titulo),
      contenido: new FormControl(this.materialInput.contenido),
      fotos: new FormControl(this.materialInput.medios[0].url),
      video: new FormControl(this.materialInput.medios[1].url),
      audio: new FormControl(this.materialInput.medios[2].url),
      enUso: new FormControl(this.checkInUse(this.materialInput.enUso)),
    });
  }
  ngOnInit(): void {  }

  onFormSubmit(): void {

    this.materialInput = {
      titulo: this.newMaterialesForm.get('titulo').value,
      contenido: this.newMaterialesForm.get('contenido').value,
      medios: [{ fotos: this.newMaterialesForm.get('image').value }, { audio: this.newMaterialesForm.get('audio').value }],
      enUso: this.newMaterialesForm.get('enUso').value,
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
