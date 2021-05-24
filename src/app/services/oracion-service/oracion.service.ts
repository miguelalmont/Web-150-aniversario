import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  baseUrl = baseUrl.url

  constructor(private http:HttpClient) { }

  getVisita():Observable<Visita[]>{
    return this.http.get<Visita[]>(this.baseUrl+'/visits/list.php');
  }
}