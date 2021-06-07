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

  constructor(private http: HttpClient, private auth: AuthenticatorJwt) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('/auth/list.php');
  }

  insertUser(row: User): Observable<User> {
      let body = {
        username: row.username,
        password: row.password,
        mail: row.mail,
        rolName: row.rolName,
        token: this.auth.getJWT()
      }
      console.log(body)
      return this.http.post<User>('/auth/insert.php', body);
   }

  updateUser(row: User): Observable<User> { 
    let body = {
      id: row.id,
      username: row.username,
      password: row.password,
      mail: row.mail,
      rolName: row.rolName,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.put<User>('/auth/update.php', body);
  }

  deleteUser() { }

}
