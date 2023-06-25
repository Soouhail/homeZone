import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./pages/first/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./pages/second/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./pages/third/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./pages/thirdHouses/page4.module').then( m => m.Page4PageModule)
  },  
  {
    path: 'page6',
    loadChildren: () => import('./pages/page6/page6.module').then( m => m.Page6PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./pages/page5/page5.module').then( m => m.Page5PageModule)
  },

  {
    path: 'page7',
    loadChildren: () => import('./pages/page7/page7.module').then( m => m.Page7PageModule)
  },
  {
    path: 'page6-addhome',
    loadChildren: () => import('./pages/page6-addhome/page6-addhome.module').then( m => m.Page6AddhomePageModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then( m => m.MarketingPageModule)
  },
  {
    path: 'restaurent',
    loadChildren: () => import('./restaurent/restaurent.module').then( m => m.RestaurentPageModule)
  },

  


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
