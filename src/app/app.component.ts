import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  titleHeader = "Oioioi! 😀"

  word = "CARRO";

  favoriteColor = "Yellow";

  title = 'Seja bem-vindo!';
  
  constructor() {
    setTimeout(() => {
      this.titleHeader = "Tchau Tchau! 👀"
    }, 5000);
  };
}