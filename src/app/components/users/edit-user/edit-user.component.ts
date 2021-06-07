import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/models';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';


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
      password: new FormControl(this.userToUpdate.password),
      admin: new FormControl(this.checkRolName(this.userToUpdate.rolName))
    });}

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
    console.log(this.user)
    this.usuariosService.updateUser(this.user).subscribe(
      res => console.log("usuario editado"),
      error => console.log(error)
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
