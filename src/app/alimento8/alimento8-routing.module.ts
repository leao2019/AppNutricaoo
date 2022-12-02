import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento8Page } from './alimento8.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento8PageRoutingModule {}
