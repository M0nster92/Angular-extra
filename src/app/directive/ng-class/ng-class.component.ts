import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  constructor() {}

  active = true;
  deactive = false;

  ngOnInit(): void {}

  setActive() {
    if (this.active) {
      return 'background';
    } else {
      return 'not';
    }
  }
  group: { [key: string]: any } = {
    background: this.active,
    not: !this.active,
  };
}
