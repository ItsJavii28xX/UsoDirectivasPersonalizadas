import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverDirective]',
  standalone: true
})
export class CustomLinkHoverDirective {
  
  // El nombre del Input es el mismo que el de la directiva
  @Input('hoverDirective') hoverDirective!: { borderColor: string };

  constructor(private element: ElementRef) {}

  @HostListener('mouseover') mouseOver() {
    this.element.nativeElement.style.border = `2px solid ${this.hoverDirective.borderColor}`;
  }

  @HostListener('mouseout') mouseOut() {
    this.element.nativeElement.style.border = 'none';
  }
}