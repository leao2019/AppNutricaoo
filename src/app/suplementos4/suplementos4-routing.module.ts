import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suplementos4Page } from './suplementos4.page';

const routes: Routes = [
  {
    path: '',
    component: Suplementos4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suplementos4PageRoutingModule {}
