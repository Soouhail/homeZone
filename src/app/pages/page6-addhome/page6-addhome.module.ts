import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page6AddhomePageRoutingModule } from './page6-addhome-routing.module';

import { Page6AddhomePage } from './page6-addhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page6AddhomePageRoutingModule
  ],
  declarations: [Page6AddhomePage]
})
export class Page6AddhomePageModule {}
