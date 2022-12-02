import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino7PageRoutingModule } from './treino7-routing.module';

import { Treino7Page } from './treino7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino7PageRoutingModule
  ],
  declarations: [Treino7Page]
})
export class Treino7PageModule {}
