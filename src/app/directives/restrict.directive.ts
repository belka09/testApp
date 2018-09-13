import { Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[restrict]',
})
export class RestrictDirective {

  regexp:any;
  @Input('restrict')
  set pattern(value)
  {
    this.regexp=new RegExp(value,"g");
  }

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event.target'])
  @HostListener('paste', ['$event.target'])
  private onInputEvent(input) {
    if (input.value) {
      let truncated = input.value.replace(this.regexp, '');
      if (truncated !== input.value) {
        this.control.valueAccessor.writeValue(truncated);
        this.control.viewToModelUpdate(truncated);
        this.control.control.setValue(truncated);

      }
    }
  }
}
