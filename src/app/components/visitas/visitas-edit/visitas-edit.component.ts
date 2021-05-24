import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-visitas-edit',
  templateUrl: './visitas-edit.component.html',
  styleUrls: ['./visitas-edit.component.scss']
})
export class VisitasEditComponent implements OnInit {

  newVisitaForm: FormGroup = this.fb.group({
    titulo: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    medios: new FormControl('',  Validators.required),
    enUso: new FormControl('',  Validators.required)
  });

  visita = {
    titulo: this.newVisitaForm.get('titulo').value,
    medios: this.newVisitaForm.get('medios').value,
    enUso: this.newVisitaForm.get('enUso').value
  }

  constructor(private fb: FormBuilder) {}

  get titulo() { return this.newVisitaForm.get('titulo').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newVisitaForm.get('titulo').value);
  }

}
