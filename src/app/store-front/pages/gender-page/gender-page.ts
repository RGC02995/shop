import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';
import { Card } from 'src/app/products/components/card/card';
import { PaginationService } from 'src/app/shared/components/pagination/pagination.service';
import { Pagination } from 'src/app/shared/components/pagination/pagination';

@Component({
  selector: 'app-gender-page',
  imports: [Card, Pagination],
  templateUrl: './gender-page.html',
})
export class GenderPage {
  route = inject(ActivatedRoute);
  paginationService = inject(PaginationService);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  private productsService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({ gender: this.gender(), page: this.paginationService.currentPage() - 1 }),
    stream: ({ params }) =>
      this.productsService.getProducts({
        gender: params.gender,
        offset: params.page * 9,
      }),
  });
}
