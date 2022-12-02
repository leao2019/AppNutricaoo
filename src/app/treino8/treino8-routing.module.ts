import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino8Page } from './treino8.page';

const routes: Routes = [
  {
    path: '',
    component: Treino8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino8PageRoutingModule {}
