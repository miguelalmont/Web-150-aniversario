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

  url: string = '/acts';

  constructor(private http:HttpClient,private auth: AuthenticatorJwt) { }

  // getActo():Observable<ActoData[]>{
  //   return this.http.get<ActoData[]>('/acts/listEverything.php');
  // }

  getActos():Observable<ActoData[]>{
    return this.http.get<ActoData[]>(`${this.url}/listEverything.php`);
  }

  getActosByID(id: number): Observable<ActoData> {
    return this.http.get<ActoData>(`${this.url}/${id}`);
  }

  createActos(acto: ActoData): Observable<ActoData> {
    return this.http.post<ActoData>(this.url, acto);
  }

  editActos(acto: ActoData): Observable<ActoData> {
    const endpoint = `${this.url}/${acto.id}`;
    return this.http.put<ActoData>(endpoint, acto);
  }

  deleteActos(acto: ActoData): Observable<ActoData> {
    return this.http.delete<ActoData>(`${this.url}/${acto.id}`);
  };

  
}
