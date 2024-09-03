import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayRender]',
  standalone: true
})
export class DelayRenderDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appDelayRender(time: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, time);
  }

}
