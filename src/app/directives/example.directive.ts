import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.style.color = "black";
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.style.color = "red";
  }

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = "red";
  }
}
