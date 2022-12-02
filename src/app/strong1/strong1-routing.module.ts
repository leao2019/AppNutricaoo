import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Strong1Page } from './strong1.page';

const routes: Routes = [
  {
    path: '',
    component: Strong1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Strong1PageRoutingModule {}
