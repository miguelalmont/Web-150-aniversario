import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historia } from 'src/app/models/historia';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoriaService {
  
  baseUrl = baseUrl.url
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHistorias(): Observable<Historia[]> {
    let url = this.baseUrl + '/story/list.php';
    return this.http.get<Historia[]>(url);
  }
}
