import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saludos} from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludosService {

  baseUrl = baseUrl.url

  constructor(private http: HttpClient) {}

  getSaludos(): Observable<Saludos[]> {
    let url = this.baseUrl + '/greetings/list.php';
    console.log(url)
    return this.http.get<Saludos[]>(url); 
  }
}
