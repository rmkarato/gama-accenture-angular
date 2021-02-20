import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  titleHeader = "Seja bem-vindo! 😀"
  showHeader = true;

  word = "CARRO";

  favoriteColor = "Yellow";
  
  constructor() {
    // setTimeout(() => {
    //   this.titleHeader = "Tchau Tchau! 👀"
    // }, 5000);
  };

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.titleHeader = "Vendo o title mudar no ngOnChanges";

    //   setTimeout(() => {
    //     this.showHeader = false;
    //   }, 3000);

    //   setTimeout(() => {
    //     this.showHeader = true;
    //   }, 5000);
    // }, 3000);
  }

  onClicked($event) {
    console.log("AppComponent: evento recebido!", $event);
  };

}