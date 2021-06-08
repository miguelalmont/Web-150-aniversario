import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oracion } from 'src/app/models/models';


@Injectable({
  providedIn: 'root'
})
export class OracionService {

  url: string = '/pray';

  constructor(private http:HttpClient) { }

  getOracion():Observable<Oracion[]>{
    return this.http.get<Oracion[]>(`${this.url}/listEverything.php`);
  }

  getOracionByID(id: number): Observable<Oracion> {
    return this.http.get<Oracion>(`${this.url}/${id}`);
  }

  createOracion(oracion: Oracion): Observable<Oracion> {
    return this.http.post<Oracion>(this.url, oracion);
  }

  editOracion(oracion: Oracion): Observable<Oracion> {
    const endpoint = `${this.url}/${oracion.id}`;
    return this.http.put<Oracion>(endpoint, oracion);
  }

  deleteOracion(oracion: Oracion): Observable<Oracion> {
    return this.http.delete<Oracion>(`${this.url}/${oracion.id}`);
  };

}
