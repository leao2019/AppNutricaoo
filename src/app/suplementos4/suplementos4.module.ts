import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suplementos4PageRoutingModule } from './suplementos4-routing.module';

import { Suplementos4Page } from './suplementos4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suplementos4PageRoutingModule
  ],
  declarations: [Suplementos4Page]
})
export class Suplementos4PageModule {}
