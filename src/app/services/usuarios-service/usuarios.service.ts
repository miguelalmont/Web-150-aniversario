import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = baseUrl.url

  constructor(private http:HttpClient, private jwt:AuthenticatorJwt) { }

  logOut(){
    const token:string = this.jwt.getJWT();
    return this.http.post('/auth/logout.php', token);
  }

  
}
