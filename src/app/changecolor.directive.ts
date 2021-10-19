import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
})
export class ChangecolorDirective {
  constructor(private elRef: ElementRef) {
    // this.elRef.nativeElement.style.color = 'blue';
  }

  // ngAfterViewInit() {
  //   this.elRef.nativeElement.style.color = 'orange';
  // }
  ngAfterContentInit() {
    this.elRef.nativeElement.style.color = 'red';
  }
  change(colors: string) {
    this.elRef.nativeElement.style.color = colors;
  }
}
