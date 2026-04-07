import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';
import { IsAdminGuard } from './auth/guards/is-admin.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboards.routes'),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    //TODO:Guards
    canMatch: [NotAuthenticatedGuard],
  },

  {
    path: '',
    loadChildren: () => import('./store-front/store-front.routes'),
  },
];
