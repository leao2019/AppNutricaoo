import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hit4PageRoutingModule } from './hit4-routing.module';

import { Hit4Page } from './hit4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hit4PageRoutingModule
  ],
  declarations: [Hit4Page]
})
export class Hit4PageModule {}
