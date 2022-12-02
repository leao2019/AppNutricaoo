import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hit3PageRoutingModule } from './hit3-routing.module';

import { Hit3Page } from './hit3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hit3PageRoutingModule
  ],
  declarations: [Hit3Page]
})
export class Hit3PageModule {}
