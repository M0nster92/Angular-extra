import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  title = 'List of Players';
  image =
    'https://cdn.lynda.com/video/506399-23-636144133429526843_338x600_thumb.jpg';

  constructor() {}

  ngOnInit(): void {}
}
