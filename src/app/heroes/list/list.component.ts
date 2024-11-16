import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heros:string[] = ['spiderman', 'hulk', 'tarzan'];

  public deleteHero?:string ='';

  removeLastHero():void{
    this.deleteHero=this.heros.pop();
  }

  


}
