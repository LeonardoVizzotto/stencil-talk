import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-newsletter (submitEvent)="onSubmit($event)"></my-newsletter>
  `,
  styles: []
})
export class AppComponent {
  onSubmit(e: CustomEvent) {
    console.log(e.detail);
  }
}
