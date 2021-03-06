import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorJwt } from 'src/app/services/authenticatorJwt.service';
import { LoginService } from 'src/app/services/login-service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  hide = true;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private authenticatorJwtService: AuthenticatorJwt,
    private fb: FormBuilder
  ) {}

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  // authenticateUser() {
  //   this.loginService.authentication(this.loginForm.controls.username.value,
  //     this.loginForm.controls.password.value).subscribe(data => {
  //     if (data.token != undefined) {
  //     this.authenticatorJwtService.storeJWT(data.token); // Almaceno un nuevo JWT
  //     this.router.navigate(['/home/saludos']); // Navego hasta listado de mensajes
  //     this.loginService.emmitNewChangesInUserAuthenticated(); // Emito evento de cambio en usuario autenticado
  //     }
  //     else {
  //     alert("Error")
  //     }
  //     });
  // }

  // logIn() {
  //   this.loginService
  //     .authentication(
  //       this.loginForm.controls.username.value,
  //       this.loginForm.controls.password.value
  //     )
  //     .subscribe((data) => {
  //       if (data.token != undefined) {
  //         this.authenticatorJwtService.storeJWT(data.token);
  //         this.router.navigate(['/home/saludos']);
  //       } else {
  //         alert('Error');
  //       }
  //     });
  // }




  // ESTA FORMA DE LOGIN ES PROVISIONAL YA QUE DA PROBLEMA DE CORS CON LOS SERVICIOS QUE TENEMOS MONTADOS
  url = 'https://app150.cmaleon.es/api150/api/auth/login.php';

  userLogIn() {
    const data = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    };
    console.log(data);
    fetch(this.url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('Success:', response);
        if (
          response.status === null ||
          (response.token !== null && response.token !== undefined)
        ) {
          this.authenticatorJwtService.storeJWT(response.token);
          this.router.navigate(['/home/saludos']);
        } else {
          Swal.fire({
            title: 'Error',
            text: `Hubo un error al introducir los datos`,
            icon: 'error',
            cancelButtonColor: '#d33',
            cancelButtonText: "Cerrar",
          })
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        Swal.fire({
          title: 'Error',
          text: `Server error ${error}`,
          icon: 'error',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cerrar",
        })
      });
  }
}
