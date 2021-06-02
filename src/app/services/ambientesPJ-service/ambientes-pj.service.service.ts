import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ambientesPj } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class AmbientesPJService {

  
  constructor(private http:HttpClient, private auth: AuthenticatorJwt) { }

  getAmbientesPj():Observable<ambientesPj[]> {
    return this.http.get<ambientesPj[]>('/pjenvironments/list.php');
  }

  insertAmbientesPj(row: ambientesPj): Observable<ambientesPj> {
    let body = {
      titulo: row.titulo,
      descripcion: row.descripcion,
      enUso: row.enUso,
      medios: row.medios,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<ambientesPj>('/pjenvironments/insert.php', body);
 }

updateAmbientesPj(row: ambientesPj): Observable<ambientesPj> { 
  let body = {
    titulo: row.titulo,
    descripcion: row.descripcion,
    enUso: row.enUso,
    medios: row.medios,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<ambientesPj>('/pjenvironments/update.php', body);
}

deleteAmbientesPj() { }
  
}
