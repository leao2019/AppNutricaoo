import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hit5Page } from './hit5.page';

const routes: Routes = [
  {
    path: '',
    component: Hit5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hit5PageRoutingModule {}
