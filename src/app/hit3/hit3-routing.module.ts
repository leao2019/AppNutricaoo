import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hit3Page } from './hit3.page';

const routes: Routes = [
  {
    path: '',
    component: Hit3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hit3PageRoutingModule {}
