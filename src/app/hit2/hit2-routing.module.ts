import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hit2Page } from './hit2.page';

const routes: Routes = [
  {
    path: '',
    component: Hit2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hit2PageRoutingModule {}
