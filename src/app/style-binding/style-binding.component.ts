import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <button [style.backgroundColor]="isActive ? 'Blue' : 'white'">
      Button
    </button>
  `,
})
export class StyleBindingComponent {
  isActive = true;
}
