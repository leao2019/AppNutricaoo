import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino4Page } from './treino4.page';

const routes: Routes = [
  {
    path: '',
    component: Treino4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino4PageRoutingModule {}
