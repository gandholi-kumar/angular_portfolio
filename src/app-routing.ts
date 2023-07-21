import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./components/product/product.component').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
