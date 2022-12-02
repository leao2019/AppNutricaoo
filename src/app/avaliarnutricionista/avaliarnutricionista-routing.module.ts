import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliarnutricionistaPage } from './avaliarnutricionista.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarnutricionistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliarnutricionistaPageRoutingModule {}
