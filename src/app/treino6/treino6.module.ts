import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino6PageRoutingModule } from './treino6-routing.module';

import { Treino6Page } from './treino6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino6PageRoutingModule
  ],
  declarations: [Treino6Page]
})
export class Treino6PageModule {}
