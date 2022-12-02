import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino8PageRoutingModule } from './treino8-routing.module';

import { Treino8Page } from './treino8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino8PageRoutingModule
  ],
  declarations: [Treino8Page]
})
export class Treino8PageModule {}
