import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzServices {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  }];

  addNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  deletedCharacterById(id:string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
