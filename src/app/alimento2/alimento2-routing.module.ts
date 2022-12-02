import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento2Page } from './alimento2.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento2PageRoutingModule {}
