import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/models';


@Injectable({
  providedIn: 'root'
})
export class MaterialesService {


  url: string = '/materials';

  constructor(private http:HttpClient) { }

  getMaterial():Observable<Material[]>{
    return this.http.get<Material[]>(`${this.url}/list.php`);
  }

  getMaterial2():Observable<Material[]>{
    return this.http.get<Material[]>(`${this.url}/listEverything.php`);
  }

  getMaterialByID(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.url}/${id}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.url, material);
  }

  editMaterial(material: Material): Observable<Material> {
    const endpoint = `${this.url}/${material.id}`;
    return this.http.put<Material>(endpoint, material);
  }

  deleteMaterial(material: Material): Observable<Material> {
    return this.http.delete<Material>(`${this.url}/${material.id}`);
  };

}
