import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementosPageRoutingModule } from './suplementos-routing.module';

import { SuplementosPage } from './suplementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementosPageRoutingModule
  ],
  declarations: [SuplementosPage]
})
export class SuplementosPageModule {}
