import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ambientesPj } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmbientesPJService {

  baseUrl = baseUrl.url
  
  constructor(private http:HttpClient) { }

  getAmbientesPj():Observable<ambientesPj[]> {
    return this.http.get<ambientesPj[]>(this.baseUrl+'/pjenvironments/list.php');
  }
  
}
