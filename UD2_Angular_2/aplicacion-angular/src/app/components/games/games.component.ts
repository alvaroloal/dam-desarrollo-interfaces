import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  template: `
    <ul>
      <h3>Juegos favoritos de {{username}}</h3>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>



      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    //alert(`A ${this.username} le gusta jugar a ${gameName}`);
    this.addFavouriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Call of Duty MW3',
    },
    {
      id: 2,
      name: 'Pro Evolution Soccer 6',
    },
    {
      id: 3,
      name: 'Red Dead Redemption',
    },
    {
      id: 4,
      name: 'Call of Duty Black Ops',
    },
  ];
}
