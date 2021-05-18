import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  template: `
    <table>
      <tr>
        <td [attr.colspan]="colspan">Working</td>
      </tr>
    </table>
  `,
})
export class AttributeBindingComponent {
  colspan = 2;
}
