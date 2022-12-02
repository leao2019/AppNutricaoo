import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino6Page } from './treino6.page';

const routes: Routes = [
  {
    path: '',
    component: Treino6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino6PageRoutingModule {}
