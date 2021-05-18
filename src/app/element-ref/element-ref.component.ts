import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.css'],
})
export class ElementRefComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('myDiv') divView: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.divView);
    this.divView.nativeElement.innerHTML = 'Hello Angular 10!';
    this.divView.nativeElement.style.color = 'red';
  }
}
