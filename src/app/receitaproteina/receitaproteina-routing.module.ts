import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaproteinaPage } from './receitaproteina.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaproteinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaproteinaPageRoutingModule {}
