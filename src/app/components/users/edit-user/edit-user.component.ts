import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    firstname: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    lastname: new FormControl('',  Validators.required),
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.minLength(6), Validators.required]),
    passwordRepeat: new FormControl('', Validators.required)
  });

  user = {
    firstname: this.newUserForm.get('firstname').value,
    lastname: this.newUserForm.get('lastname').value,
    email: this.newUserForm.get('email').value,
    password: this.newUserForm.get('password').value,
    passwordRepeat: this.newUserForm.get('passwordRepeat').value
  }

  constructor(private fb: FormBuilder) {}

  get firstname() { return this.newUserForm.get('firstname').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
    console.log('Name:' + this.newUserForm.get('firstname').value);
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
          'Usuário actualizado correctamente',
          'success'
        )
      }
    })
  }
}
