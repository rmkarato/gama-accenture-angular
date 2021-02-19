import { Component } from '@angular/core';

@Component({
  selector: 'app-exerccio-ngclass',
  templateUrl: './exerccio-ngclass.component.html',
  styleUrls: ['./exerccio-ngclass.component.scss']
})
export class ExerccioNgclassComponent {
  
  deveSerVerde = false;

  tornarVerde() {
    this.deveSerVerde = true;
  }
}
