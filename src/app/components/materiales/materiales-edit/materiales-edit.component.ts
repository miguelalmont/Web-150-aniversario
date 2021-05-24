import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-materiales-edit',
  templateUrl: './materiales-edit.component.html',
  styleUrls: ['./materiales-edit.component.scss']
})
export class MaterialesEditComponent implements OnInit {

  newMaterialesForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    contenido: new FormControl('',  Validators.required),
    medios: new FormControl('',  Validators.required)
  });

  materiales = {
    titulo: this.newMaterialesForm.get('titulo').value,
    contenido: this.newMaterialesForm.get('contenido').value,
    medios: this.newMaterialesForm.get('medios').value
  }

  constructor(private fb: FormBuilder) {}

  get titulp() { return this.newMaterialesForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newMaterialesForm.get('titulo').value);
  }

}
