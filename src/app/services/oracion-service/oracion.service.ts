import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oracion, Visita } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OracionService {

  constructor(private http:HttpClient) { }

  getOracion():Observable<Oracion[]>{
    return this.http.get<Oracion[]>('/pray/list.php');
  }
}
