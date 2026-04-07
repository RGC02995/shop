import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

export const IsAdminGuard: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  await firstValueFrom(authService.checkStatus());
  const isAdminRol = authService.isAdmin();

  return isAdminRol;
};
