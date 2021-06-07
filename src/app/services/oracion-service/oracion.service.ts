import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oracion, Visita } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class OracionService {

  constructor(private http:HttpClient,private auth: AuthenticatorJwt) { }

  getOracion():Observable<Oracion[]>{
    return this.http.get<Oracion[]>('/pray/list.php');
  }

  insertOracion(row: Oracion): Observable<Oracion> {
    let body = {
      titulo: row.titulo,
      texto: row.oracion,
      enUso: row.enUso,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<Oracion>('/pray/insert.php', body);
 }

updateOracion(row: Oracion): Observable<Oracion> { 
  let body = {
    id: row.id,
    titulo: row.titulo,
    texto: row.oracion,
    enUso: row.enUso,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<Oracion>('/pray/update.php', body);
}

deleteOracion() { }
}
