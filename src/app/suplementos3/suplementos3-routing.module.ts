import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suplementos3Page } from './suplementos3.page';

const routes: Routes = [
  {
    path: '',
    component: Suplementos3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Suplementos3PageRoutingModule {}
