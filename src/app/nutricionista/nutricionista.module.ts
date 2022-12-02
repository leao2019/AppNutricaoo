import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricionistaPageRoutingModule } from './nutricionista-routing.module';

import { NutricionistaPage } from './nutricionista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricionistaPageRoutingModule
  ],
  declarations: [NutricionistaPage]
})
export class NutricionistaPageModule {}
