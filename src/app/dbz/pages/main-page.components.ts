import { Component} from '@angular/core';
import { Character } from '../interfaces/characters.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.components.html'
})

export class MainComponent  {
  constructor(private dbzService:DbzService){

  }

  public agregarPersonaje(personaje:Character){
    this.dbzService.agregarPersonaje(personaje);
  }

  public eliminarPersonajeById(id:string){
    this.dbzService.eliminarPersonajeById(id);
  }

  public getPersonajes():Character[]{
    return this.dbzService.personajes;
  }

}
