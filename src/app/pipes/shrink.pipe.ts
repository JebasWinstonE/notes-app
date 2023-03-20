import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrink',
})
export class ShrinkPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 300) {
      return value.slice(0, 300) + '...';
    } else {
      return value;
    }
  }
}
