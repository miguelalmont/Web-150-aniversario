import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/environments/environment';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnDestroy {

  @Input()
  userToDetail: UserData = {
    name: '',
    email: '',
    password: '',
    admin: false
  };

  detailUserForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.userToDetail = data.row;
    this.detailUserForm = this.fb.group({
      name: new FormControl(this.userToDetail.name),
      email: new FormControl(this.userToDetail.email),
      password: new FormControl(this.userToDetail.password),
      admin: new FormControl(this.userToDetail.admin)
    });
  }
  ngOnDestroy(): void {
  }

  get firstname() { return this.detailUserForm.get('firstname').value; }

  onFormSubmit(): void {
    console.log('Name:' + this.detailUserForm.get('firstname').value);
  }

}
