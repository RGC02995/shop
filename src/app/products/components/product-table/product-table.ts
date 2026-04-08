import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductImagePipe } from '../../pipes/product-image.pipe';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Pagination } from 'src/app/shared/components/pagination/pagination';

@Component({
  selector: 'product-table',
  imports: [ProductImagePipe, RouterLink, CurrencyPipe, Pagination],
  templateUrl: './product-table.html',
})
export class ProductTable {
  products = input.required<Product[]>();
}
