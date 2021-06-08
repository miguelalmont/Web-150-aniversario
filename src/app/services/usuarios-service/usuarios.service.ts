import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    row.token = this.auth.getJWT();
    console.log(row)
    return this.http.post<User>('/auth/insert.php', row);
   }

  updateUser(row: User) { 
    let body = {
      id: row.id,
      username: row.username,
      password: row.password,
      mail: row.mail,
      rolName: row.rolName,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.put(`/auth/update.php?idUser=${body.id}&userName=${body.username}&password=${body.password}&mail=${body.mail}
    &rolName=${body.rolName}&token=${body.token}`, body);
  }

  deleteUser(id: number) {
    // const options = {
    //   headers: new HttpHeaders(),
    //   body: {
    //     idUser: id,
    //     token: this.auth.getJWT()
    //   },
    // };
    return this.http.delete(`/auth/delete.php/${id}`);
   }

  logOut(){
    const token:string = this.auth.getJWT();
    return this.http.post('/auth/logout.php', token);
  }

}
