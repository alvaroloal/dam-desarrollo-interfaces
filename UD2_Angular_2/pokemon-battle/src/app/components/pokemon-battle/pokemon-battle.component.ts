import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {
  pokemon1: Pokemon | null = null;
  pokemon2: Pokemon | null = null;
  pokemon1Hp: number = 100;
  pokemon2Hp: number = 100;
  maxHp1: number = 100;
  maxHp2: number = 100;
  turn: number = 1;
  winner: string | null = null;

  pokemonList: { id: number, name: string }[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    for (let i = 1; i <= 30; i++) {
      this.pokemonService.getPokemon(i).subscribe(pokemon => {
        this.pokemonList.push({ id: i, name: pokemon.name });
      });
    }
  }

  onPokemonSelect(pokemonSlot: number, event: Event) {
    const selectedId = +(event.target as HTMLSelectElement).value;
    if (pokemonSlot === 1) {
      this.pokemonService.getPokemon(selectedId).subscribe(pokemon => {
        this.pokemon1 = pokemon;
        this.pokemon1Hp = pokemon.stats[0].base_stat;
        this.maxHp1 = this.pokemon1Hp;
      });
    } else if (pokemonSlot === 2) {
      this.pokemonService.getPokemon(selectedId).subscribe(pokemon => {
        this.pokemon2 = pokemon;
        this.pokemon2Hp = pokemon.stats[0].base_stat;
        this.maxHp2 = this.pokemon2Hp;
      });
    }
  }

  onAttack(pokemon: number) {
    if (pokemon === 1 && this.turn === 1 && this.pokemon2) {
      this.pokemon2Hp = Math.max(this.pokemon2Hp - 10, 0);
      this.turn = 2;
    } else if (pokemon === 2 && this.turn === 2 && this.pokemon1) {
      this.pokemon1Hp = Math.max(this.pokemon1Hp - 10, 0);
      this.turn = 1;
    }
    this.checkWinner();
  }

  checkWinner() {
    if (this.pokemon1Hp <= 0) {
      this.winner = this.pokemon2?.name || 'Jugador 2';
    } else if (this.pokemon2Hp <= 0) {
      this.winner = this.pokemon1?.name || 'Jugador 1';
    }
  }

  resetBattle() {
    this.pokemon1 = null;
    this.pokemon2 = null;
    this.pokemon1Hp = 100;
    this.pokemon2Hp = 100;
    this.maxHp1 = 100;
    this.maxHp2 = 100;
    this.turn = 1;
    this.winner = null;
  }
}
