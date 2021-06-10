import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import { passwordValidator } from 'src/app/shared/password-validator';
import { UsersViewComponent } from '../users-view/users-view.component';


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

  newUserForm: FormGroup;

  checked: boolean = false;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private usuariosService: UsuariosService,
  public dialogRef: MatDialogRef<UsersViewComponent>) {
    this.userToUpdate = data.row;
    this.checked = this.checkRolName(this.data.row.rolName)
    this.newUserForm = this.fb.group({
      username: new FormControl(this.userToUpdate.username, Validators.required),
      mail: new FormControl(this.userToUpdate.mail, Validators.required),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      passwordRepeat: new FormControl('', Validators.required),
      admin: this.checked
    }, { validators: passwordValidator })
  }

  ngOnInit(): void { }

  onFormSubmit(): void {

    this.userToUpdate = {
      id: this.userToUpdate.id,
      username: this.newUserForm.get('username').value,
      mail: this.newUserForm.get('mail').value,
      password: this.newUserForm.get('password').value,
      rolName: this.unCheckRolName(this.newUserForm.get('admin').value)
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
        this.usuariosService.updateUser(this.userToUpdate).subscribe(
          res => {
            console.log("usuario editado", res, this.userToUpdate)
            Swal.fire(
              'Perfecto',
              'Usuario actualizado correctamente',
              'success'
            )
            this.dialogRef.close()
          },
          error => {
            console.error(error, "Error", this.userToUpdate)
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al editar',
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

  unCheckRolName(checked: boolean) {
    console.log("CHECKED IS " + checked)
    if (checked)
      return 'admin';
    else if (!checked)
      return 'user';
  }

}
