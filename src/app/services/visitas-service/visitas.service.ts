import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from 'src/app/models/models';
import { AuthenticatorJwt } from '../authenticatorJwt.service';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  url: string = '/visits';

  constructor(private http:HttpClient) { }

  getVisita():Observable<Visita[]>{
    return this.http.get<Visita[]>(`${this.url}/listEverything.php`);
  }

  getVisitaByID(id: number): Observable<Visita> {
    return this.http.get<Visita>(`${this.url}/${id}`);
  }

  createVisita(visita: Visita): Observable<Visita> {
    return this.http.post<Visita>(this.url, visita);
  }

  editVisita(visita: Visita): Observable<Visita> {
    const endpoint = `${this.url}/${visita.id}`;
    return this.http.put<Visita>(endpoint, visita);
  }

  deleteVisita(visita: Visita): Observable<Visita> {
    return this.http.delete<Visita>(`${this.url}/${visita.id}`);
  };


}
