import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oracion } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OracionService {

  baseUrl = baseUrl.url

  constructor(private http:HttpClient) { }

  getOracion():Observable<Oracion[]>{
    return this.http.get<Oracion[]>(this.baseUrl+'/pray/list.php');
  }
}
