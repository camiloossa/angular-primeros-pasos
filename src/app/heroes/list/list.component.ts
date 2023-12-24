import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosName: string[] = ['Spiderman', 'Superman', 'SuperGirl', "Hulk", 'Atman'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.herosName.pop();
  }


}
