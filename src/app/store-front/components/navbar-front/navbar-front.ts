import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar-front',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-front.html',
})
export class NavbarFront {
  closeMenu(): void {
    (document.activeElement as HTMLElement)?.blur();
  }
}
