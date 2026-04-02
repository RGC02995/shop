import { Component } from '@angular/core';
import { NavbarFront } from '../../components/navbar-front/navbar-front';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',
})
export class HomePage {}
