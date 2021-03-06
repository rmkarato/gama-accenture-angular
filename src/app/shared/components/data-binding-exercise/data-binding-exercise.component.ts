import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding-exercise',
  templateUrl: './data-binding-exercise.component.html',
  styleUrls: ['./data-binding-exercise.component.scss']
})
export class DataBindingExerciseComponent implements OnInit {

  @Input() word: string;
  @Input() color: string;

  @Output() clicked = new EventEmitter();
  
  initialValue = "Valor Inicial";
  isDisabled = true;
  accesibilityText = "Um texto acessível";
  imageURL="data:image/jpeg;base64,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";
  
  valorDoInput = "";

  valorDoContador = 10;

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
      console.log("isDisabled:", this.isDisabled)
    }, 3000);
  }

  ngOnInit(): void {
  }

  onClick($event) {
    console.log("Clicou!", $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse($event) {
    console.log("Alguém passou o mouse!")
    console.log($event);
  }

  onClickButton($event) {
    console.log("Devo emitir informações para o componente pai.")
    this.clicked.emit($event);
  }

  // onValorAtualizadoNoContador(novoValor) {
  //   this.valorDoContador = novoValor;
  //   console.log("onValorAtualizadoNoContador:", novoValor);
  // };
}
