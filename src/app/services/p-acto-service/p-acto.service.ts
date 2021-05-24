import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActoData } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PActoService {

  baseUrl = baseUrl.url

  constructor(private http:HttpClient) { }

  getActo():Observable<ActoData[]>{
    return this.http.get<ActoData[]>(this.baseUrl+'/acts/list.php');
  }
}
