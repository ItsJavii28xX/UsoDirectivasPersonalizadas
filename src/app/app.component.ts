import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomLinkHoverDirective } from './custom-link-hover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomLinkHoverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
