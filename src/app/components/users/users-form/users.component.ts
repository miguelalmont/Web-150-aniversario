import { UsersViewComponent } from './../users-view/users-view.component';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { passwordValidator } from 'src/app/shared/password-validator';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  newUserForm: FormGroup;

  user: User = {
    username: '',
    password: '',
    mail: '',
    rolName: ''
  };

  checked: boolean = false;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService,
    public dialogRef: MatDialogRef<UsersViewComponent>) {
    this.newUserForm = this.fb.group({
      username: new FormControl('',  [Validators.required, Validators.minLength(6)]),
      mail: new FormControl('',  [Validators.required, Validators.email]),
      password: new FormControl('',  [Validators.minLength(6), Validators.required]),
      passwordRepeat: new FormControl('',  [Validators.minLength(6), Validators.required]),
      admin: this.checked
    }, {validators: passwordValidator});
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.user = {
      username: this.newUserForm.get('username').value,
      mail: this.newUserForm.get('mail').value,
      password: this.newUserForm.get('password').value,
      rolName: this.unCheckRolName(this.newUserForm.get('admin').value)
    }
    console.log('Name:' + this.newUserForm.get('username').value);
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
        this.usuariosService.insertUser(this.user).subscribe(
          response => {
            console.log('Usuario insertado ', response)
            Swal.fire(
              'Perfecto',
              'Usuario creado correctamente',
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
