import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon: any;
  @Input() health: number = 100;
  @Input() isTurn: boolean = false;
  @Output() attack = new EventEmitter<number>();

  onAttack() {
    this.attack.emit(this.isTurn ? 1 : 2);
  }
}

