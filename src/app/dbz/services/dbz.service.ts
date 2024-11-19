import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interfaces';
import { v4 as uuid } from "uuid";
@Injectable({providedIn: 'root'})

export class DbzService {
  public personajes:Character[]=[{
    id: uuid(),
    name: 'Krillin',
    power: 9000

  },{
    id: uuid(),
    name: 'Goku',
    power:922372

  },{
    id: uuid(),
    name:'cell',
    power: 31
  },{
    id: uuid(),
    name:'cell',
    power: 31
  },];

  agregarPersonaje(character:Character):void{
    // console.log(character)
    const newCharcter:Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.personajes.push(newCharcter);
  }

  eliminarPersonajeById(id:string):void{
    this.personajes=this.personajes.filter(person => person.id!==id);
    console.log(this.personajes,"fdsfsdfsdfdsfsd")

  }

}
