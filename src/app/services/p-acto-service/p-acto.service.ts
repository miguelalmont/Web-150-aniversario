import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActoData } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class PActoService {


  constructor(private http:HttpClient,private auth: AuthenticatorJwt) { }

  getActo():Observable<ActoData[]>{
    return this.http.get<ActoData[]>('/acts/listEverything.php');
  }

  insertActo(row: ActoData): Observable<ActoData> {
    let body = {
      titulo: row.titulo,
      descripcion: row.descripcion,
      categoria: row.categoria,
      ubicacion: row.ubicacion,
      fecha: row.fecha,
      enUso: row.enUso,
      medios: row.medios,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<ActoData>('/acts/insert.php', body);
 }

updateActo(row: ActoData): Observable<ActoData> { 
  let body = {
    titulo: row.titulo,
    descripcion: row.descripcion,
    categoria: row.categoria,
    ubicacion: row.ubicacion,
    fecha: row.fecha,
    enUso: row.enUso,
    medios: row.medios,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<ActoData>('/acts/update.php', body);
}

deleteActo() { }
}
