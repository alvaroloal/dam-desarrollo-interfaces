import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        data.results = data.results.map((vehicle: any) => {
          const vehicleId = this.extractVehicleId(vehicle.url);
          return {
            ...vehicle, imageUrl: `https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`
          };
        });
        return data;
      })
    );
  }

  private extractVehicleId(url: string): string {
    const regex = /\/api\/vehicles\/(\d+)\//;
    const match = url.match(regex);
    return match ? match[1] : '';
  }
}
