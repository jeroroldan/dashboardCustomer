import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
})
export class MayusculaPipe implements PipeTransform {
  transform(value: string, args: boolean = true): string {
    return args ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
