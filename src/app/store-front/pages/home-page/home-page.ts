import { PaginationService } from './../../../shared/components/pagination/pagination.service';
import { Component, inject } from '@angular/core';
import { Card } from '../../../products/components/card/card';
import { ProductsService } from 'src/app/products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pagination } from 'src/app/shared/components/pagination/pagination';

@Component({
  selector: 'app-home-page',
  imports: [Card, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {
  private productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  // activatedRout = inject(ActivatedRoute);
  // currentPage = toSignal(
  //   this.activatedRout.queryParamMap.pipe(
  //     map((params) => (params.get('page') ? +params.get('page')! : 1)),
  //     map((page) => (isNaN(page) ? 1 : page)),
  //   ),
  //   {
  //     initialValue: 1,
  //   },
  // );

  productsResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() - 1 }),
    stream: ({ params }) =>
      this.productsService.getProducts({
        offset: params.page * 9,
      }),
  });
}
