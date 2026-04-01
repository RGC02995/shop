import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';
import { Routes } from '@angular/router';

export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayout,
    children: [],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
