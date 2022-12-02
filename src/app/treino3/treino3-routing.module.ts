import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Treino3Page } from './treino3.page';

const routes: Routes = [
  {
    path: '',
    component: Treino3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Treino3PageRoutingModule {}
