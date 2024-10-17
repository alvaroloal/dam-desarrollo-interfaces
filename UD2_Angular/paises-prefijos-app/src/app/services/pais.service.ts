import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private jsonURL = 'assets/paises.json';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
