import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { passwordValidator } from 'src/app/shared/password-validator';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input()
  userToUpdate: User = {
    id: 0,
    username: '',
    password: '',
    mail: '',
    rolName: ''
  };

  newUserForm: FormGroup = this.fb.group({
    username: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    mail: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.minLength(6), Validators.required]),
    passwordRepeat: new FormControl('', Validators.required),
    rolName: new FormControl(false)
  });

  user: User = {
    id: 0,
    username: '',
    mail: '',
    password: '',
    rolName: ''
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private usuariosService: UsuariosService) {
    this.userToUpdate = data.row;
    this.newUserForm = this.fb.group({
      username: new FormControl(this.userToUpdate.username),
      mail: new FormControl(this.userToUpdate.mail),
      password: [''],
      passwordRepeat: new FormControl('', [Validators.required]),
      admin: new FormControl(this.checkRolName(this.userToUpdate.rolName))
    }, {validators: passwordValidator} ) 
  }

  get name() { return this.newUserForm.get('username').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {

    this.user = {
      id: this.data.row.id,
      username: this.newUserForm.get('username').value,
      mail: this.newUserForm.get('mail').value,
      password: this.newUserForm.get('password').value,
      rolName: this.unCheckRolName(this.data.row.rolName)
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podran revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.updateUser(this.user).subscribe(
          res => {
            console.log("usuario editado", res, this.user)
            Swal.fire(
              'Perfecto',
              'Usuario actualizado correctamente',
              'success'
            )
          },
          error => {
            console.error(error, "Error", this.user)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al editar',
              icon: 'error',
              cancelButtonColor: '#d33',
              cancelButtonText: "Cerrar",
            })
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
