import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino5Page } from './treino5.page';

const routes: Routes = [
  {
    path: '',
    component: Treino5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino5PageRoutingModule {}
