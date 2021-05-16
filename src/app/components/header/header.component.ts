import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorJwt } from 'src/app/services/authenticatorJwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private router: Router, private authenticatorJwt: AuthenticatorJwt) {
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
    this.router.navigate(['/login']);
  }


}
