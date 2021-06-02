import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {


  constructor(private http:HttpClient, private auth: AuthenticatorJwt) { }

  getVisita():Observable<Visita[]>{
    return this.http.get<Visita[]>('/visits/listEverything.php');
  }

  insertVisita(row: Visita): Observable<Visita> {
    let body = {
      titulo: row.titulo,
      descripcion: row.descripcion,
      enUso: row.enUso,
      medios: row.medios,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<Visita>('/visits/insert.php', body);
 }

updateVisita(row: Visita): Observable<Visita> { 
  let body = {
    id: row.id,
    titulo: row.titulo,
    descripcion: row.descripcion,
    enUso: row.enUso,
    medios: row.medios,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<Visita>('/visits/update.php', body);
}

deleteVisita() { }
}
