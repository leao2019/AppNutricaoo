import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento7Page } from './alimento7.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento7PageRoutingModule {}
