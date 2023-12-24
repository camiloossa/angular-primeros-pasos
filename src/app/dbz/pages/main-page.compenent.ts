import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: DbzServices ){

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string ):void {
    this.dbzService.deletedCharacterById( id );
  }

  onNewCharacter( characters: Character ):void {
    this.dbzService.addNewCharacter(characters);
  }

}
