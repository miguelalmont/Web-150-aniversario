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
  
  url: string = '/story';

  constructor(private http:HttpClient) { }

  getHistorias():Observable<Historia[]>{
    return this.http.get<Historia[]>(`${this.url}/list.php`);
  }

  getHistoriaByID(id: number): Observable<Historia> {
    return this.http.get<Historia>(`${this.url}/${id}`);
  }

  createHistoria(historia: Historia): Observable<Historia> {
    return this.http.post<Historia>(this.url, historia);
  }

  editHistoria(historia: Historia): Observable<Historia> {
    const endpoint = `${this.url}/${historia.id}`;
    return this.http.put<Historia>(endpoint, historia);
  }

  deleteHistoria(historia: Historia): Observable<Historia> {
    return this.http.delete<Historia>(`${this.url}/${historia.id}`);
  };

}
