import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: ` <button (click)="onSave()">save</button> `,
})
export class EventBindingComponent {
  onSave() {
    console.log('Saved!!');
  }
}
