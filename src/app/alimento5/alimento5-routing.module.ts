import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alimento5Page } from './alimento5.page';

const routes: Routes = [
  {
    path: '',
    component: Alimento5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alimento5PageRoutingModule {}
