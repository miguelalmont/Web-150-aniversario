import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ambientesPj } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmbientesPJService {

  
  constructor(private http:HttpClient) { }

  getAmbientesPj():Observable<ambientesPj[]> {
    return this.http.get<ambientesPj[]>('/pjenvironments/list.php');
  }
  
}
