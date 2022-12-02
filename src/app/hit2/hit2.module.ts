import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hit2PageRoutingModule } from './hit2-routing.module';

import { Hit2Page } from './hit2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hit2PageRoutingModule
  ],
  declarations: [Hit2Page]
})
export class Hit2PageModule {}
