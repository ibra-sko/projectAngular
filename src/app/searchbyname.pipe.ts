import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyname'
})
export class SearchbynamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
