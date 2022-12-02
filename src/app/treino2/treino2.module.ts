import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino2PageRoutingModule } from './treino2-routing.module';

import { Treino2Page } from './treino2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino2PageRoutingModule
  ],
  declarations: [Treino2Page]
})
export class Treino2PageModule {}
