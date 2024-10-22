import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<{ results: Person[] }> {
    return this.http.get<{ results: Person[] }>(this.apiUrl);
  }

  getCharacterImage(id: number): string {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }
}




