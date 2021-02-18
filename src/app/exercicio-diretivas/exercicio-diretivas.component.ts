import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})

export class ExercicioDiretivasComponent {

  deveExibir = true;

  trocarValor() {
    this.deveExibir = !this.deveExibir
  }

  soma(num1, num2) {
    return num1 + num2;
  }

}
