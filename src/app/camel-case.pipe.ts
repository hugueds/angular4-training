import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})

export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ')
      .map(v => v.replace(v[0], v[0].toUpperCase()))
      .join(' ')    
  }
}
