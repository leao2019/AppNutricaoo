import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino5PageRoutingModule } from './treino5-routing.module';

import { Treino5Page } from './treino5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino5PageRoutingModule
  ],
  declarations: [Treino5Page]
})
export class Treino5PageModule {}
