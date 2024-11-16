import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter : {{counter}}</h3>

    <button (click)="incrementar()">+1</button>
    <button (click)="resetear()">Reset</button>
    <button (click)="decrementar()">-1</button>
    <hr>


  `
})

export class CounterComponent implements OnInit {
  public counter =10 ;

  incrementar(){
    this.counter+=1;
  }

  decrementar( ){
    this.counter-=1;
  }

  resetear(){
    this.counter=10;
  }


  ngOnInit() { }
}
