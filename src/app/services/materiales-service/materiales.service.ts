import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saludo } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludosService {

  baseUrl = baseUrl.url

  constructor(private http:HttpClient) { }

  getSaludo():Observable<Saludo[]>{
    return this.http.get<Saludo[]>(this.baseUrl+'/greetings/list.php');
  }
  
}
