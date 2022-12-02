import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Treino3PageRoutingModule } from './treino3-routing.module';

import { Treino3Page } from './treino3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Treino3PageRoutingModule
  ],
  declarations: [Treino3Page]
})
export class Treino3PageModule {}
