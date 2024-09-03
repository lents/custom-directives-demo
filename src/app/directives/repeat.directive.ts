import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface RepeatContext {
  $implicit: number; // Current index
  index: number; // Same as $implicit
  even: boolean; // Whether the index is even
  odd: boolean; // Whether the index is odd
}

@Directive({
  selector: '[appRepeat]',
  standalone: true
})
export class RepeatDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appRepeat(times: number){
    this.viewContainer.clear();
    for(let i = 0; i< times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: i,
        index: i,
        even: i % 2 === 0,
        odd: i % 2 !== 0,
      });
    }
  }

  static ngTemplateContextGuard(
    directive: RepeatDirective,
    context: unknown
  ): context is RepeatContext {
    return true;
  }

}
