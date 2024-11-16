import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string ='ironman';
  public age:number = 50;

  get getName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name='Hulk'
  }

  changeAge():void{
    this.age=1060
  }

  reset(){
    this.name='ironman';
    this.age=50;
  }

}
