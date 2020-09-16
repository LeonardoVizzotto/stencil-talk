import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-newsletter></my-newsletter>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
