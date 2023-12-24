 import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( data: Character ) {
    this.onDeleted.emit(data.id);
  }

}
