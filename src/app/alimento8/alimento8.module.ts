import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento8PageRoutingModule } from './alimento8-routing.module';

import { Alimento8Page } from './alimento8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento8PageRoutingModule
  ],
  declarations: [Alimento8Page]
})
export class Alimento8PageModule {}
