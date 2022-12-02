import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suplemento2PageRoutingModule } from './suplemento2-routing.module';

import { Suplemento2Page } from './suplemento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suplemento2PageRoutingModule
  ],
  declarations: [Suplemento2Page]
})
export class Suplemento2PageModule {}
