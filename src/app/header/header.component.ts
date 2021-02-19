import { Component, Input, OnInit, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() titleHeader: string;
  
  constructor() { 
    console.log("Construtor");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("Fui destruído! :(");
  }

}
