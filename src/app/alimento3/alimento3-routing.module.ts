import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento3Page } from './alimento3.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento3PageRoutingModule {}
