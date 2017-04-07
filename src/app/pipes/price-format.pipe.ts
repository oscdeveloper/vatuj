import { Pipe, PipeTransform } from '@angular/core';

//TODO check is it useful in app
@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: any): any {
    if ( value !== null ) {
      value = value.replace(/[^0-9,\.]/, '');
      return value;
    }    
  }

}
