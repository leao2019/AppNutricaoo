import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegurancasenhaPage } from './segurancasenha.page';

const routes: Routes = [
  {
    path: '',
    component: SegurancasenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegurancasenhaPageRoutingModule {}
