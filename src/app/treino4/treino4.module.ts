import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino4PageRoutingModule } from './treino4-routing.module';

import { Treino4Page } from './treino4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino4PageRoutingModule
  ],
  declarations: [Treino4Page]
})
export class Treino4PageModule {}
