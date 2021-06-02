import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(private http:HttpClient,private auth: AuthenticatorJwt) { }

  getMaterial():Observable<Material[]>{
    return this.http.get<Material[]>('/materials/list.php');
  }

  insertMaterial(row: Material): Observable<Material> {
    let body = {
      titulo: row.titulo,
      contenido: row.contenido,
      enUso: row.enUso,
      medios: row.medios,
      token: this.auth.getJWT()
    }
    console.log(body)
    return this.http.post<Material>('/materials/insert.php', body);
 }

updateMaterial(row: Material): Observable<Material> { 
  let body = {
    id: row.id,
    titulo: row.titulo,
    contenido: row.contenido,
    enUso: row.enUso,
    medios: row.medios,
    token: this.auth.getJWT()
  }
  console.log(body)
  return this.http.put<Material>('/materials/update.php', body);
}

deleteMaterial() { }
}
