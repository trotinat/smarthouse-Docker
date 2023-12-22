import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../model/Categorie";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  apiUrl=environment.URL + 'categorie';


  constructor(private http:HttpClient) { }



  findAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/`);
  }

  saveCategory(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.apiUrl}/`, categorie);
  }

  deleteCategorie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/id/${id}`);
  }
  updateCategorie(id: number, updatedCategorie: { label: string }): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.apiUrl}/id/${id}`, updatedCategorie);
  }

}
