import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nutricionista2Page } from './nutricionista2.page';

const routes: Routes = [
  {
    path: '',
    component: Nutricionista2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nutricionista2PageRoutingModule {}
