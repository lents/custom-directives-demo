import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowIfDirective } from './directives/show-if.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { DelayRenderDirective } from './directives/delay-render.directive';
import { RepeatDirective } from './directives/repeat.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowIfDirective, HoverHighlightDirective, DelayRenderDirective, RepeatDirective, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-directives-demo';
  showContent = true; 
}
