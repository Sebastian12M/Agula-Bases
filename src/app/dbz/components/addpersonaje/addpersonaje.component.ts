import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './addpersonaje.component.html',
  styleUrl: './addpersonaje.component.css'
})
export class AddpersonajeComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character:Character= {
    name: ' ',
    power: 0
  }

  imprimirPersonaje():void{
    console.log(this.character)
    this.onNewCharacter.emit(this.character)
    this.character.name='';
    this.character.power=0;
  }
}
