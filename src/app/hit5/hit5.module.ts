import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hit5PageRoutingModule } from './hit5-routing.module';

import { Hit5Page } from './hit5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hit5PageRoutingModule
  ],
  declarations: [Hit5Page]
})
export class Hit5PageModule {}
