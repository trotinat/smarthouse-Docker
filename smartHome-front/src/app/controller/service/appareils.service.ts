import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appareil} from "../model/Appareil";
import {Categorie} from "../model/Categorie";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  category_url = environment.URL + "categorie";
  appareil_url = environment.URL + 'appareil';

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(`${this.appareil_url}/`);
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.category_url}/`);
  }

  saveAppareil(appareil: Appareil): Observable<Appareil> {
    return this.http.post<Appareil>(`${this.appareil_url}/`, appareil);
  }

  deleteAppareil(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appareil_url}/id/${id}`);
  }

  updateAppareil(id: any, appareil: any): Observable<Appareil> {
    return this.http.put<Appareil>(`${this.appareil_url}/id/${id}`, appareil);
  }

  switchState(state: boolean): Observable<void> {
    return this.http.get<void>(`${this.appareil_url}/update/state/${state}`);
  }


}
