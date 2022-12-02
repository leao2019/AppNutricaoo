import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nutricionista2PageRoutingModule } from './nutricionista2-routing.module';

import { Nutricionista2Page } from './nutricionista2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nutricionista2PageRoutingModule
  ],
  declarations: [Nutricionista2Page]
})
export class Nutricionista2PageModule {}
