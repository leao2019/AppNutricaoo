import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino2Page } from './treino2.page';

const routes: Routes = [
  {
    path: '',
    component: Treino2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino2PageRoutingModule {}
