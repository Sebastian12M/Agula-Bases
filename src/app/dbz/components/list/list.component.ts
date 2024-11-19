import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public listaPersonajes:Character[]=[];


  @Output()
  indexCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?:string):void{
    console.log(index);
    this.indexCharacter.emit(index);

  }

}
