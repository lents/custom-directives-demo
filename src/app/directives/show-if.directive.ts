import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]',
  standalone: true
})
export class ShowIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  private _appShowIf = false;

  // Input property to control when to show/hide the template
  @Input() set appShowIf(condition: boolean) {
    this._appShowIf = condition;
    this.updateView();
  }

  // Method to update the view based on the condition
  private updateView() {
    if (this._appShowIf) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
