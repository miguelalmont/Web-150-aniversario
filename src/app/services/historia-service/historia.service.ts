import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historia } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoriaService {
  
  baseUrl = baseUrl.url

  constructor(private http: HttpClient) {}

  getHistorias(): Observable<Historia[]> {
    return this.http.get<Historia[]>('/story/list.php');
  }

  insertHistoria() { }

  updateHistoria() { }

  deleteHistoria() { }

}
