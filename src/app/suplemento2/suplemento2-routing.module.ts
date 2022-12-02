import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suplemento2Page } from './suplemento2.page';

const routes: Routes = [
  {
    path: '',
    component: Suplemento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suplemento2PageRoutingModule {}
