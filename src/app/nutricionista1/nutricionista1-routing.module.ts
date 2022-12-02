import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nutricionista1Page } from './nutricionista1.page';

const routes: Routes = [
  {
    path: '',
    component: Nutricionista1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nutricionista1PageRoutingModule {}
