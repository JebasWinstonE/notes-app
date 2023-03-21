import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrink',
})
export class ShrinkPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 170) {
      return value.slice(0, 170) + '...';
    } else {
      return value;
    }
  }
}
