import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliarnutricionistaPageRoutingModule } from './avaliarnutricionista-routing.module';

import { AvaliarnutricionistaPage } from './avaliarnutricionista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliarnutricionistaPageRoutingModule
  ],
  declarations: [AvaliarnutricionistaPage]
})
export class AvaliarnutricionistaPageModule {}
