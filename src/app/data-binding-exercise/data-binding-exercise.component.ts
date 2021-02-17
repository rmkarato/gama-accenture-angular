import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-exercise',
  templateUrl: './data-binding-exercise.component.html',
  styleUrls: ['./data-binding-exercise.component.scss']
})
export class DataBindingExerciseComponent implements OnInit {

  @Input() word: string;
  @Input() color: string;
  
  initialValue = "Valor Inicial";
  isDisabled = true;
  accesibilityText = "Um texto acessível";
  imageURL="https://i.pinimg.com/originals/58/4b/40/584b401e84a7f7baaf39bc52275f6707.jpg";
  
  valorDoInput = "";

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
}
