import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe'
})
export class FirstpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
