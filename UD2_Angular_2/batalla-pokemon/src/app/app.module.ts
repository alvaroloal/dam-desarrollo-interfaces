import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonBattleComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }