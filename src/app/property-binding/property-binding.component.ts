import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `<h1>Property Binding</h1>
    <img [src]="image" /> `,
})
export class PropertyBindingComponent {
  image =
    'https://cdn.lynda.com/video/506399-23-636144133429526843_338x600_thumb.jpg';
}
