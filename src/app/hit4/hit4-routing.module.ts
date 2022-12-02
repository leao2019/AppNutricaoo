import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hit4Page } from './hit4.page';

const routes: Routes = [
  {
    path: '',
    component: Hit4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hit4PageRoutingModule {}
