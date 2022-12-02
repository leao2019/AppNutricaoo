import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaproteinaPageRoutingModule } from './receitaproteina-routing.module';

import { ReceitaproteinaPage } from './receitaproteina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaproteinaPageRoutingModule
  ],
  declarations: [ReceitaproteinaPage]
})
export class ReceitaproteinaPageModule {}
