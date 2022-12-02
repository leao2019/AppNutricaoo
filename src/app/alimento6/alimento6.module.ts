import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento6PageRoutingModule } from './alimento6-routing.module';

import { Alimento6Page } from './alimento6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento6PageRoutingModule
  ],
  declarations: [Alimento6Page]
})
export class Alimento6PageModule {}
