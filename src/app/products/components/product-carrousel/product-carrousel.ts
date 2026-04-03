import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'product-carrousel',
  imports: [ProductImagePipe],
  templateUrl: './product-carrousel.html',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `,
})
export class ProductCarrousel implements AfterViewInit {
  imagesCarrousel = input.required<string[]>();
  swiperDiv = viewChild.required<ElementRef>('swiperDiv');

  ngAfterViewInit(): void {
    const element = this.swiperDiv().nativeElement;
    if (!element) {
      console.error('Swiper element not found');
      return;
    }

    console.log('Initializing Swiper with images:', this.imagesCarrousel());

    new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      //Modules
      modules: [Navigation, Pagination],
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
