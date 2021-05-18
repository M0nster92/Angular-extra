import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nested-output',
  templateUrl: './nested-output.component.html',
  styleUrls: ['./nested-output.component.css'],
})
export class NestedOutputComponent implements OnInit {
  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.change.emit();
  }
}
