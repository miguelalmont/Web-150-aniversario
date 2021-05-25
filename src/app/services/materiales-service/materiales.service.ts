import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/models';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(private http:HttpClient) { }

  getMaterial():Observable<Material[]>{
    return this.http.get<Material[]>('/materials/list.php');
  }
}
