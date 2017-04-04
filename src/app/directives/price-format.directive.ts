import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[priceFormat]'
})
export class PriceFormatDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keypress', ['$event']) 
  keyPress(event: any) {

    if ( this.isNumberKey(event) ) {

      let key = event.key,
          value = this.el.nativeElement.value;
          
      if ( key === '.' ) {
        key = ',';
        if ( value !== '' && (value.match(/,/g) || []).length === 0 ) {
          let start = this.el.nativeElement.selectionStart;
          this.el.nativeElement.value = value.slice(0, start) + key + value.slice(start, value.length);
          this.el.nativeElement.setSelectionRange(start+1,start+1);
        }        
        return false;
      }

      value += key;
      
      if ( value.match(/^[0-9]/g) === null && ( key != '0' && value.indexOf(',') > -1 ) ) {
        return false;
      } else if ( value.indexOf(',') > -1 ) {
        if ( value.match(/^[\d]+,\d{0,2}$/g) === null && key != '0' ) {
          return false;
        } else if ( (value.match(/,/g) || []).length > 1 ) {
          return false;
        }        
      }
      return true;
    } else {
      return false;
    }

  }

  @HostListener('blur', ['$event.target.value']) 
  keyUp(value: string) {
    value = value
            .replace(/,$/g, '')
            .replace(/^,(.*?)/g, '0,$1')
            .replace(/(,\d)$/g, '$10')
            .replace(/,00$/g, '')            
            .replace(/^0+$/g, '0')
            .replace(/^0+(^,)?(\d+)/g, '$1$2');
    this.el.nativeElement.value = value;
  }

  private isNumberKey(event: any) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if ( charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 44 && charCode !== 46 ) {
            return false;
        }
        return true;
  }

}
