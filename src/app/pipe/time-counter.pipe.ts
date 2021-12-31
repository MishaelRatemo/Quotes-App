import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
