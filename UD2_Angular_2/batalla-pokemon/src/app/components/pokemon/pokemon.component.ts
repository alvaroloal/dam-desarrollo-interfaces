import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemonName!: string;
  @Input() pokemonImage!: string;
  @Input() health!: number;

  
  @Input() pokemon: any;
  @Output() attack = new EventEmitter<number>();


  attacks = [
    { name: 'Ataque 1', damage: 10 },
    { name: 'Ataque 2', damage: 15 },
    { name: 'Ataque 3', damage: 25 },
    { name: 'Ataque 4', damage: 30 }
  ];

  performAttack(damage: number) {
    this.attack.emit(damage);
  }


  onAttack() {
    this.attack.emit();
  }



}
