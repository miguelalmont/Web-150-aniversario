import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnDestroy {

  @Input()
  userToDetail: User = {
    username: '',
    password: '',
    mail: '',
    rolName: ''
  };

  detailUserForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.userToDetail = data.row;
    this.detailUserForm = this.fb.group({
      username: new FormControl(this.userToDetail.username),
      mail: new FormControl(this.userToDetail.mail),
      rolName: new FormControl(this.checkRolName(this.userToDetail.rolName))
    });
  }
  ngOnDestroy(): void {
  }

  get firstname() { return this.detailUserForm.get('username').value; }

  onFormSubmit(): void {
    console.log('Name:' + this.detailUserForm.get('username').value);
  }

  checkRolName(rolName: string) {
    if (rolName == 'admin')
      return true;
    else
      return false;
  }
}
