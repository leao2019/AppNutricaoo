import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Strong1PageRoutingModule } from './strong1-routing.module';

import { Strong1Page } from './strong1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Strong1PageRoutingModule
  ],
  declarations: [Strong1Page]
})
export class Strong1PageModule {}
