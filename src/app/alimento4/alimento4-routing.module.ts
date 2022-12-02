import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento4Page } from './alimento4.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento4PageRoutingModule {}
