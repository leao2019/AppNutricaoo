import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento1PageRoutingModule } from './alimento1-routing.module';

import { Alimento1Page } from './alimento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento1PageRoutingModule
  ],
  declarations: [Alimento1Page]
})
export class Alimento1PageModule {}
