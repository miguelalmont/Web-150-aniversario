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


  constructor(private http: HttpClient, private auth: AuthenticatorJwt) {}

  getSaludos(): Observable<Saludo[]> {
    return this.http.get<Saludo[]>('/greetings/listEverything.php'); 
  }

  insertSaludo(row: Saludo): Observable<Saludo> {
    let body = {
      id: row.id,
      titulo: row.titulo,
      descripcion: row.descripcion,
      texto: row.contenido,
      enUso: row.enUso,
      medios: row.medios,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<Saludo>('/greetings/insert.php', body);
 }

updateSaludo(row: Saludo): Observable<Saludo> { 
  let body = {
    titulo: row.titulo,
    descripcion: row.descripcion,
    texto: row.contenido,
    enUso: row.enUso,
    medios: row.medios,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<Saludo>('/greetings/update.php', body);
}

deleteSaludo() { }
}
