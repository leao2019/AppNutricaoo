import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricionistaPage } from './nutricionista.page';

const routes: Routes = [
  {
    path: '',
    component: NutricionistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricionistaPageRoutingModule {}
