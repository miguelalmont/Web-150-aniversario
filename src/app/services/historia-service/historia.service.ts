import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historia } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root',
})
export class HistoriaService {
  

  constructor(private http: HttpClient, private auth: AuthenticatorJwt) {}

  getHistorias(): Observable<Historia[]> {
    return this.http.get<Historia[]>('/story/list.php');
  }

  insertHistoria(): Observable<Historia> {
    let body = {
      tituloHistoria: 'pepe',
      subtituloHistoria: 'pepepepe',
      descripcion: 'descripcion',
      enUso: 0,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<Historia>('/story/insert.php', body);
   }

  updateHistoria() { }

  deleteHistoria() { }

}
