import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <h4>Two Way Binding</h4>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `,
})
export class TwoWayBindingComponent {
  email = 'abc@angular.com';

  onKeyUp() {
    console.log(this.email);
  }
}
