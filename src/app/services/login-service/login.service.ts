import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token, UserLogin } from './../../models/models';
import { baseUrl } from './../../../environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userAuthenticated: UserLogin;
  baseUrl = baseUrl.url

  @Output()
  changesInUserAuthenticated = new EventEmitter<UserLogin>();

  constructor(private http: HttpClient) {}

  authentication(name: string, pass: string): Observable<Token> {
    const md5 = new Md5();
    var jsonObject = {
      username: name,
      password: md5.appendStr(pass).end().toString()
    };

    console.log(jsonObject)

    return this.http.post<Token>(`/auth/login.php`, jsonObject).pipe(
      tap((data) => {
        console.log('User token: ' + data['jwt']);
      })
    );
  }

  getUserAuthenticated(): Observable<UserLogin> {
    return this.http.get<UserLogin>(`/auth/login.php`).pipe(
      tap((userAuthenticated) => {
        console.log('getuserAuten');
        if (
          (this.userAuthenticated == null && userAuthenticated != null) ||
          (this.userAuthenticated != null && userAuthenticated == null) ||
          (this.userAuthenticated != null &&
            userAuthenticated == null &&
            this.userAuthenticated.username != userAuthenticated.username)
        ) {
          this.emmitNewChangesInUserAuthenticated();
          this.userAuthenticated = this.userAuthenticated;
        }
      })
    );
  }

  emmitNewChangesInUserAuthenticated() {
    this.getUserAuthenticated().subscribe((userAuthenticated) => {
      console.log('emit');
      this.changesInUserAuthenticated.emit(userAuthenticated);
    });
  }

  getUser(email: string): Observable<UserLogin> {
    let url = '/user/get?email=' + email;
    return this.http.get<UserLogin>(url);
  }

  loggedIn() {
    return !!localStorage.getItem('jwt');    
  }
  
}
