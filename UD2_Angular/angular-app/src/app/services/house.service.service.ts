import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {

  constructor(private http: HttpClient){}


  //el mismo tipo que recibo el metodo, lo muesto en la llamada
  getHouseList(): Observable<House[]>{
    return this.http.get<House[]>('http://localhost:3000/houses');




  }
}
