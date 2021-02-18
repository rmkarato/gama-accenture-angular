import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})

export class ExercicioDiretivasComponent {

  listaFrutas = [
    "Maçã",
    "Banana",
    "Laranja",
    "Morango",
    "Maracujá",
    "Uva",
    "Mamão",
    "Goiaba",
    "Melância"
  ];

  listaCarros = [{
      placa: "FVB-8808",
      cor: "Preto",
      modelo: "Honda Fit",
    },{
      placa: "FMM-9703",
      cor: "Prata",
      modelo: "Nissan March",
    },{
      placa: "FGB-5601",
      cor: "Branco",
      modelo: "Chevrolet Onix",
    },{
      placa: "JHK-0025",
      cor: "Vermelho",
      modelo: "Nissan Versa",
    },{
      placa: "GFR-8963",
      cor: "Preto",
      modelo: "Fiat Punto",
    },
  ];

  deveExibir = true;

  trocarValor() {
    this.deveExibir = !this.deveExibir
  }

  soma(num1, num2) {
    return num1 + num2;
  }

}
