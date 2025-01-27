import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(products: Product[], criteria: string, asc: boolean = true): Product[] {
    switch (criteria) {
      case 'dateAsc':
        return products.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
      case 'dateDesc':
        return products.sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
      case 'nameAsc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  }
}