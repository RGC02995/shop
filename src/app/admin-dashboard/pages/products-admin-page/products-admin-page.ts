import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductTable } from 'src/app/products/components/product-table/product-table';
import { ProductsService } from 'src/app/products/services/products.service';
import { Pagination } from 'src/app/shared/components/pagination/pagination';
import { PaginationService } from 'src/app/shared/components/pagination/pagination.service';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, Pagination],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage {
  private productsService = inject(ProductsService);

  paginationService = inject(PaginationService);

  productsPerPage = signal<number>(10);

  productsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.productsPerPage(),
    }),
    stream: ({ params }) =>
      this.productsService.getProducts({
        offset: params.page * 9,
        limit: params.limit,
      }),
  });
}
