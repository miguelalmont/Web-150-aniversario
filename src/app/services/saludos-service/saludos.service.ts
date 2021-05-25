import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saludo} from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludosService {


  constructor(private http: HttpClient) {}

  getSaludos(): Observable<Saludo[]> {
    return this.http.get<Saludo[]>('/greetings/listEverything.php'); 
  }
}
