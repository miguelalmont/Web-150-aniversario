import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActoData } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PActoService {

  baseUrl = baseUrl.url

  constructor(private http: HttpClient) { }

  async getHistorias(): Promise<ActoData[]> {
    let url = this.baseUrl + '/story/list.php';
    let historiaData = await this.http.get<ActoData[]>(url).toPromise();
    return historiaData;
  }
}
