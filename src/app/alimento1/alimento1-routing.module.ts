import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento1Page } from './alimento1.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento1PageRoutingModule {}
