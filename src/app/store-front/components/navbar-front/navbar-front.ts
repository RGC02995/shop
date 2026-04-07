import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'navbar-front',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-front.html',
})
export class NavbarFront {
  authService = inject(AuthService);

  closeMenu(): void {
    (document.activeElement as HTMLElement)?.blur();
  }
}
