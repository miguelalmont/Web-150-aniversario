import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialesService } from 'src/app/services/materiales-service/materiales.service';
import { Material } from 'src/app/models/models';
import Swal from "sweetalert2";

@Component({
  selector: 'app-materiales-edit',
  templateUrl: './materiales-edit.component.html',
  styleUrls: ['./materiales-edit.component.scss']
})
export class MaterialesEditComponent implements OnInit {

  @Input() MaterialInput: Material = {
    id: 0,
    titulo: '',
    contenido: '',
    enUso: 0,
    medios: []
}

  newMaterialesForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    contenido: new FormControl('',  Validators.required),
    medios: new FormControl('',  Validators.required),
    enUso: new FormControl('',  Validators.required)
  });

  materiales = {
    id: this.MaterialInput.id,
    titulo: this.newMaterialesForm.get('titulo').value,
    contenido: this.newMaterialesForm.get('contenido').value,
    medios: this.newMaterialesForm.get('medios').value,
    enUso: 0
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private materialService: MaterialesService) {
    this.MaterialInput = data.row;
    console.log('INPUT ->' + this.MaterialInput.titulo);
    this.newMaterialesForm = this.fb.group({
      titulo: new FormControl(this.MaterialInput.titulo),
      contenido: new FormControl(this.MaterialInput.contenido),
      enUso: new FormControl(this.MaterialInput.enUso),
      medios: new FormControl(this.MaterialInput.medios)
    });
  }

  get titulo() { return this.newMaterialesForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.materiales = {
      id: this.data.row.id,
      titulo: this.newMaterialesForm.get('titulo').value,
      contenido: this.newMaterialesForm.get('contenido').value,
      enUso: this.newMaterialesForm.get('enUso').value,
      medios: this.newMaterialesForm.get('medios').value
    }
    this.materialService.updateMaterial(this.materiales).subscribe(
      res => console.log("formulario editado"),
      error => console.log(error)
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
          'Material actualizado correctamente',
          'success'
        )
      }
    })
  }

}
