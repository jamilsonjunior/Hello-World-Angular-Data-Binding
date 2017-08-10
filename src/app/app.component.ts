import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{titulo}}</h1>
  <h2>Meu jogo favorito é: {{jogoFavorito}}</h2>
  <p>Jogos:</p>
  <ul>
    <li *ngFor="let jogo of jogos">
      {{jogo}}
    </li>
  </ul>
  `
})
export class AppComponent {
   titulo = 'Meus jogos';
   jogos = ['Rocket League', 'Portal', 'Overwatch'];
   jogoFavorito = this.jogos[0];
 }
