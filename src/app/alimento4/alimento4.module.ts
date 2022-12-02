import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento4PageRoutingModule } from './alimento4-routing.module';

import { Alimento4Page } from './alimento4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento4PageRoutingModule
  ],
  declarations: [Alimento4Page]
})
export class Alimento4PageModule {}
