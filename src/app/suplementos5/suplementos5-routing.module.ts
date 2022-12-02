import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suplementos5Page } from './suplementos5.page';

const routes: Routes = [
  {
    path: '',
    component: Suplementos5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suplementos5PageRoutingModule {}
