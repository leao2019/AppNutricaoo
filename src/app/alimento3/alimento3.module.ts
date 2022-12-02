import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento3PageRoutingModule } from './alimento3-routing.module';

import { Alimento3Page } from './alimento3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento3PageRoutingModule
  ],
  declarations: [Alimento3Page]
})
export class Alimento3PageModule {}
