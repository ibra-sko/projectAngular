import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./product";


@Pipe({name: 'sortByDate'})
export class SortByDate implements PipeTransform {
  transform(product: Product[], asc?: boolean): Product[] {
    return product.sort((a, b) => {
      return asc ?
          a.createdDate.getTime() - b.createdDate.getTime()
         :
          b.createdDate.getTime() - a.createdDate.getTime()
      })
  }
}
