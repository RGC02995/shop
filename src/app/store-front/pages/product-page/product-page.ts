import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarrousel } from 'src/app/products/components/product-carrousel/product-carrousel';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarrousel],
  templateUrl: './product-page.html',
})
export class ProductPage {
  private productService = inject(ProductsService);

  activatedRoute = inject(ActivatedRoute);

  productSlug = this.activatedRoute.snapshot.params['id'];

  productResource = rxResource({
    params: () => {
      const slug = this.productSlug; // señal o input
      if (!slug) return undefined; // 🔑 evita la llamada si no hay valor aún
      return { idSlug: slug };
    },
    stream: ({ params }) => this.productService.getProductByIdSlug(params.idSlug),
  });
}
