import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverDirective]',
  standalone: true
})
export class CustomLinkHoverDirective {

  constructor(private element: ElementRef) {}

  @HostListener('mouseover') mouseOver() {
    this.element.nativeElement.classList.add('custom');
  }

  @HostListener('mouseout') mouseOut() {
    this.element.nativeElement.classList.remove('custom');
  }
}

