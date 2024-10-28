import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {
  pokemons: any[] = [];
  pokemon1: any;
  pokemon2: any;
  turn: number = 1; // 1 for pokemon1, 2 for pokemon2
  health1: number = 100;
  health2: number = 100;
  winner: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
      this.selectRandomPokemons();
    });
  }

  selectRandomPokemons() {
    this.pokemon1 = this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
    this.pokemon2 = this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
  }

  attack(pokemon: number) {
    if (this.winner) return; // No puede atacar si hay un ganador

    const damage = Math.floor(Math.random() * 20) + 1; // Daño aleatorio entre 1 y 20
    if (pokemon === 1) {
      this.health2 -= damage;
      if (this.health2 <= 0) {
        this.winner = 'Pokemon 1 wins!';
      }
      this.turn = 2; // Cambia turno
    } else {
      this.health1 -= damage;
      if (this.health1 <= 0) {
        this.winner = 'Pokemon 2 wins!';
      }
      this.turn = 1; // Cambia turno
    }
  }

  resetBattle() {
    this.health1 = 100;
    this.health2 = 100;
    this.winner = null;
    this.selectRandomPokemons();
  }
}
