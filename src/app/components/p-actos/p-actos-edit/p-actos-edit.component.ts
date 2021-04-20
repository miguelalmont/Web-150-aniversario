import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-p-actos-edit',
  templateUrl: './p-actos-edit.component.html',
  styleUrls: ['./p-actos-edit.component.scss']
})
export class PActosEditComponent implements OnInit {

  newUserForm: FormGroup = this.fb.group({
    title: new FormControl('',  [Validators.required, Validators.minLength(6)]),
<<<<<<< Updated upstream
    description: new FormControl('',  [Validators.required, Validators.minLength(10)]),
    category: new FormControl('',  [Validators.required]),
    date: new FormControl('',  [Validators.required]),
=======
    description: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    category: new FormControl('',  Validators.required),
    date: new FormControl('',  Validators.required),
>>>>>>> Stashed changes
    image: new FormControl('', Validators.required)
  });

  user = {
    title: this.newUserForm.get('title').value,
    description: this.newUserForm.get('description').value,
    category: this.newUserForm.get('category').value,
    date: this.newUserForm.get('date').value,
    image: this.newUserForm.get('image').value
  }

  constructor(private fb: FormBuilder) {}

  get title() { return this.newUserForm.get('title').value; }

  ngOnInit(): void {}

  onFormSubmit(): void {
<<<<<<< Updated upstream
    console.log('Name:' + this.newUserForm.get('title').value);
  }

}

=======
    console.log('Title:' + this.newUserForm.get('title').value);
  }

}
>>>>>>> Stashed changes
