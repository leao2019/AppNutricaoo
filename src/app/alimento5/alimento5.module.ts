import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alimento5PageRoutingModule } from './alimento5-routing.module';

import { Alimento5Page } from './alimento5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alimento5PageRoutingModule
  ],
  declarations: [Alimento5Page]
})
export class Alimento5PageModule {}
