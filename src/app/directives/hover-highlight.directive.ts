import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listen to mouseenter event to change background color
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  // Listen to mouseleave event to reset background color
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  // Method to change background color
  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
