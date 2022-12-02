import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Suplementos3PageRoutingModule } from './suplementos3-routing.module';

import { Suplementos3Page } from './suplementos3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Suplementos3PageRoutingModule
  ],
  declarations: [Suplementos3Page]
})
export class Suplementos3PageModule {}
