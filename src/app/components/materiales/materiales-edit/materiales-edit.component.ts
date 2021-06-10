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
  materialToUpdate: Material = {
    id: 0,
    tipo: 0,
    url: '',
    enUso: 0
}

  newMaterialesForm: FormGroup = this.fb.group({
    tipo: new FormControl('',  [Validators.required, Validators.minLength(1)]),
    url: new FormControl('',  [Validators.required, Validators.email]),
    enUso: new FormControl('',  [Validators.required, Validators.minLength(1)])
  });

  material: Material = {
    id: 0,
    tipo: 0,
    url: '',
    enUso: 0
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private materialService: MaterialesService,
  public dialogRef: MatDialogRef<MaterialesViewComponent>) {
    
    this.materialToUpdate = data.row;
    console.log("editar tabla" ,this.materialToUpdate)
    this.newMaterialesForm = this.fb.group({
      tipo: new FormControl(this.materialToUpdate.tipo),
      url: new FormControl(this.materialToUpdate.url),
      enUso: new FormControl(this.materialToUpdate.enUso),
    });
  }
  ngOnInit(): void {  }

  onFormSubmit(): void {

    this.material = {
      tipo: this.newMaterialesForm.get('tipo').value,
      url: this.newMaterialesForm.get('url').value,
      enUso: this.newMaterialesForm.get('enUso').value
    }

    this.materialService.editMaterial(this.material).subscribe(
      res => {
        console.log("usuario editado", res, this.material)
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
        console.error(error, "Error", this.material)
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

  enUsoBool(enUso: number) {
    if (enUso == 0)
      return false;
    else if (enUso == 1)
      return true;
    else
      return null;
  }
  

}
