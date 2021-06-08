import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saludo} from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class SaludosService {


  url: string = '/greetings';

  constructor(private http: HttpClient, private auth: AuthenticatorJwt) {}

  // getSaludos(): Observable<Saludo[]> {
  //   return this.http.get<Saludo[]>('/greetings/listEverything.php'); 
  // }

  getSaludos():Observable<Saludo[]>{
    return this.http.get<Saludo[]>(`${this.url}/listEverything.php`);
  }

  getSaludosByID(id: number): Observable<Saludo> {
    return this.http.get<Saludo>(`${this.url}/${id}`);
  }

  createSaludos(saludo: Saludo): Observable<Saludo> {
    return this.http.post<Saludo>(this.url, saludo);
  }

  editSaludos(saludo: Saludo): Observable<Saludo> {
    const endpoint = `${this.url}/${saludo.id}`;
    return this.http.put<Saludo>(endpoint, saludo);
  }

  deleteSaludos(saludo: Saludo): Observable<Saludo> {
    return this.http.delete<Saludo>(`${this.url}/${saludo.id}`);
  };
}