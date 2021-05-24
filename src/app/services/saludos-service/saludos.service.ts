import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saludo} from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludosService {

  baseUrl = baseUrl.url

  constructor(private http: HttpClient) {}

  getSaludos(): Observable<Saludo[]> {
    let url = this.baseUrl + '/greetings/list.php';
    return this.http.get<Saludo[]>(url); 
  }
}
