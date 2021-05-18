import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login-service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.loggedIn() || true) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
