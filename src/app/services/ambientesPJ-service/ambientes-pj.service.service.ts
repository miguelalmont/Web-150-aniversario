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

  url: string = '/pjenvironments';

  constructor(private http:HttpClient) { }

  getAmbientesPj():Observable<ambientesPj[]> {
    return this.http.get<ambientesPj[]>('/pjenvironments/list.php');
  }

  // getAmbientesPj():Observable<ambientesPj[]>{
  //   return this.http.get<ambientesPj[]>(`${this.url}/listEverything.php`);
  // }

  getAmbienteByID(id: number): Observable<ambientesPj> {
    return this.http.get<ambientesPj>(`${this.url}/${id}`);
  }

  createAmbiente(historia: ambientesPj): Observable<ambientesPj> {
    return this.http.post<ambientesPj>(this.url, historia);
  }

  editAmbiente(historia: ambientesPj): Observable<ambientesPj> {
    const endpoint = `${this.url}/${historia.id}`;
    return this.http.put<ambientesPj>(endpoint, historia);
  }

  deleteAmbiente(historia: ambientesPj): Observable<ambientesPj> {
    return this.http.delete<ambientesPj>(`${this.url}/${historia.id}`);
  };
  
}
