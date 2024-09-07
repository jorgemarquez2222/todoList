import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonparse',
  standalone: true
})

export class JsonparsePipe implements PipeTransform {

  transform(value: any): any {
    try {
      const [res] = JSON.parse(value)
      return res;
    } catch (error) {
      return ''
    }
  }

}
