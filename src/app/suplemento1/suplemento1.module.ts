import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suplemento1PageRoutingModule } from './suplemento1-routing.module';

import { Suplemento1Page } from './suplemento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suplemento1PageRoutingModule
  ],
  declarations: [Suplemento1Page]
})
export class Suplemento1PageModule {}
