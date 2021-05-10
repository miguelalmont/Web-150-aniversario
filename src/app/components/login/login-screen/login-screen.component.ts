import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorJwt } from 'src/app/services/authenticatorJwt.service';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  
  loginForm: FormGroup;
  hide = true;
  constructor(private loginService:LoginService, private router:Router, private authenticatorJwtService: AuthenticatorJwt) { }
 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl ([Validators.required, Validators.minLength(4)]),
      password: new FormControl ([Validators.required])
      });
  }

  authenticateUser() {
    this.loginService.authentication(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value).subscribe(data => {
      if (data.token != undefined) {
      this.authenticatorJwtService.storeJWT(data.token); // Almaceno un nuevo JWT
      this.router.navigate(['/home/saludos']); // Navego hasta listado de mensajes
      this.loginService.emmitNewChangesInUserAuthenticated(); // Emito evento de cambio en usuario autenticado
      }
      else {
      alert("Error")
      }
      });
  }

}
