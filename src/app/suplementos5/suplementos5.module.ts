import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suplementos5PageRoutingModule } from './suplementos5-routing.module';

import { Suplementos5Page } from './suplementos5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suplementos5PageRoutingModule
  ],
  declarations: [Suplementos5Page]
})
export class Suplementos5PageModule {}
