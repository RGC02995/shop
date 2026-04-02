import { Component, inject } from '@angular/core';
import { NavbarFront } from '../../components/navbar-front/navbar-front';
import { Card } from '../../components/card/card';
import { Options, ProductsService } from 'src/app/products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',
})
export class HomePage {
  private productsService = inject(ProductsService);

  productSpecs: Options = {
    limit: 12,
    offset: 15,
    gender: 'kid',
  };

  productsResource = rxResource({
    params: () => ({}),
    stream: () => this.productsService.getProducts(this.productSpecs),
  });
}
