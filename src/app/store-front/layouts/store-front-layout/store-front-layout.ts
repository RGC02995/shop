import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarFront } from '../../components/navbar-front/navbar-front';

@Component({
  selector: 'app-store-front-layout',
  imports: [RouterOutlet, NavbarFront],
  templateUrl: './store-front-layout.html',
})
export class StoreFrontLayout {}
