import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page6AddhomePage } from './page6-addhome.page';

const routes: Routes = [
  {
    path: '',
    component: Page6AddhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page6AddhomePageRoutingModule {}
