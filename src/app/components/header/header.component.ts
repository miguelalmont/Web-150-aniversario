import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorJwt } from 'src/app/services/authenticatorJwt.service';
import { UsuariosService } from 'src/app/services/usuarios-service/usuarios.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private router: Router, private authenticatorJwt: AuthenticatorJwt, private usuariosService:UsuariosService) {
    this.router.events.subscribe(() => {
      if (this.router.url.includes('home')) {
        this.logged = true;
      } else {
        this.logged = false;
      };
   });
  }

  ngOnInit(): void {}

  logOut() {
    console.log('Desconectado')
    this.authenticatorJwt.deleteJWT();
    this.usuariosService.logOut().subscribe(
      response => console.log('Desconectado con éxito'),
      error =>  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Problema en el servidor'
      }) 
    );
    this.router.navigate(['/login']);

  }


}
