import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon | null = null;
  @Input() canAttack: boolean = false;
  @Output() attack = new EventEmitter<void>();


  //metodo para lo que puede hacer el pokemon
  onAttack() {
    if (this.canAttack) {
      this.attack.emit();
    }
  }
}
