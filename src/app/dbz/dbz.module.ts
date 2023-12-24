import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from '../dbz/pages/main-page.compenent';
import { ListComponent } from './components/list/list.component';
import { DbzAddCharacter } from './components/addCharacter/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    DbzAddCharacter
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
