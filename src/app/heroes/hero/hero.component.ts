import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = "iroman";
  public age:number = 45;
  public reset:boolean = false;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'spiderman';
    this.reset = true;
  }

  changeAge(): void {
    this.age = 25;
    this.reset = true;
  }

  resetForm():void {
    this.name = 'iroman';
    this.age = 45;
    this.reset = false;
  }

}
