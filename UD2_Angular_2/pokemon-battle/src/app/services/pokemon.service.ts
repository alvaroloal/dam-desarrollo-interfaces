import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonApiResponse {
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonApiResponse> {
    return this.http.get<PokemonApiResponse>(this.apiUrl);
  }
}
