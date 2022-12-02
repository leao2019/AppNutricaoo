import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento2PageRoutingModule } from './alimento2-routing.module';

import { Alimento2Page } from './alimento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento2PageRoutingModule
  ],
  declarations: [Alimento2Page]
})
export class Alimento2PageModule {}
