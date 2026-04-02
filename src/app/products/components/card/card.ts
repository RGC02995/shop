import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '../../pipes/product-image.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'card',
  imports: [RouterLink, SlicePipe, ProductImagePipe, NgOptimizedImage],
  templateUrl: './card.html',
})
export class Card {
  product = input.required<Product>();
}
