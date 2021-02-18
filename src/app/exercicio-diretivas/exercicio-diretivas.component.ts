import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

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

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  trocarValor() {
    this.deveExibir = !this.deveExibir
  }

  soma(num1, num2) {
    return num1 + num2;
  }

}
