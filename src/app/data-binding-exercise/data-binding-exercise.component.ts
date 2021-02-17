import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-exercise',
  templateUrl: './data-binding-exercise.component.html',
  styleUrls: ['./data-binding-exercise.component.scss']
})
export class DataBindingExerciseComponent implements OnInit {
  initialValue = "Valor Inicial";
  isDisabled = true;
  accesibilityText = "Um texto acessível";
  imageURL="https://i.pinimg.com/originals/58/4b/40/584b401e84a7f7baaf39bc52275f6707.jpg";
  
  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
      console.log("isDisabled:", this.isDisabled)
    }, 3000);
  }

  ngOnInit(): void {
  }

}
