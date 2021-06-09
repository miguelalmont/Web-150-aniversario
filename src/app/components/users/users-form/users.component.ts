import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { passwordValidator } from 'src/app/shared/password-validator';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    username: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    mail: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.minLength(6), Validators.required]),
    passwordRepeat: new FormControl('',  [Validators.minLength(6), Validators.required]),
    rolName: []
  }, {validators: passwordValidator});

  user: User;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.user = {
      username: this.newUserForm.get('username').value,
      mail: this.newUserForm.get('mail').value,
      password: this.newUserForm.get('password').value,
      rolName: this.unCheckRolName(this.newUserForm.get('rolName').value),
    }
    console.log('Name:' + this.newUserForm.get('username').value);
    this.usuariosService.insertUser(this.user).subscribe(
      response => {
        console.log('Usuario insertado ', response)
        Swal.fire({
          title: '¿Estas seguro?',
          text: "Vas a crear un usuario",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cancelar",
          confirmButtonText: 'Crear'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Perfecto',
              'Usuario creado correctamente',
              'success'
            )
          }
        })
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
      }
    );
  }

  checkRolName(rolName: string) {
    if (rolName === 'admin')
      return true;
    else
      return false;
  }

  unCheckRolName(rolName: boolean) {
    if (rolName)
      return 'admin';
    else
      return 'user';
  }

}
