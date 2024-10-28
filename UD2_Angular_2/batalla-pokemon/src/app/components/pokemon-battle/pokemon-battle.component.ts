import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent {
  pokemon1 = {
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    health: 100
  };

  pokemon2 = {
    name: 'Charizard',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    health: 100
  };
  winner: string | null = null;


  onAttack(attacker: number, damage: number) {
    if (attacker === 1) {
      this.pokemon2.health -= damage;
      if (this.pokemon2.health <= 0) {
        this.winner = this.pokemon1.name;
      }
    } else if (attacker === 2) {
      this.pokemon1.health -= damage;
      if (this.pokemon1.health <= 0) {
        this.winner = this.pokemon2.name;
      }
    }
  }


  resetBattle() {
    this.pokemon1.health = 100;
    this.pokemon2.health = 100;
    this.winner = null;
  }
}
