import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/app/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (typeof value === 'string') {
      return `${baseUrl}/files/product/${value}`;
    }

    const image = value.at(0);

    if (value.length <= 1 || !image) return './assets/images/no-image.jpg';
    if (value.length >= 1) return value[0];

    return `${baseUrl}/files/product/${image}`;
  }
}
