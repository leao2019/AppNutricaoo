import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento7PageRoutingModule } from './alimento7-routing.module';

import { Alimento7Page } from './alimento7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento7PageRoutingModule
  ],
  declarations: [Alimento7Page]
})
export class Alimento7PageModule {}
