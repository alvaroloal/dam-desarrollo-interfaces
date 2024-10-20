import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'uki';
  isLoggedIn = false; // esto funciona como un estado
  favGame = '';

  getFavourite(gameName:string){
    this.favGame= gameName;
  }

  greet(){
    alert('Viva el SFC!!!');
  }

}
