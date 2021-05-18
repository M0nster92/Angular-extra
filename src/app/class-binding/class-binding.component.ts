import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h1>Class Binding</h1>
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      (click)="makeActive()"
    >
      Submit
    </button>
  `,
})
export class ClassBindingComponent {
  isActive = false;
  makeActive() {
    this.isActive = !this.isActive;
  }
}
