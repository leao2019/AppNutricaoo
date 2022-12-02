import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nutricionista1PageRoutingModule } from './nutricionista1-routing.module';

import { Nutricionista1Page } from './nutricionista1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nutricionista1PageRoutingModule
  ],
  declarations: [Nutricionista1Page]
})
export class Nutricionista1PageModule {}
