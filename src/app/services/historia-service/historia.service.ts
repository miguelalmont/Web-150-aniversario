import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historia } from 'src/app/models/historia';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  
  baseUrl = baseUrl.url

  constructor(private http: HttpClient) { }

  async getHistorias(): Promise<Historia[]> {
    let url = this.baseUrl + '/story/list.php';
    return this.http.get<Historia[]>(url).toPromise<Historia[]>();
  }
}
