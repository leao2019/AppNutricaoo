import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegurancasenhaPageRoutingModule } from './segurancasenha-routing.module';

import { SegurancasenhaPage } from './segurancasenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegurancasenhaPageRoutingModule
  ],
  declarations: [SegurancasenhaPage]
})
export class SegurancasenhaPageModule {}
