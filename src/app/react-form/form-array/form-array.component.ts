import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    console.log(this.form.get('topics'));
    topic.value = '';
  }

  get Topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: any) {
    console.log(topic);
    let index = this.Topics.controls.indexOf(topic);
    this.Topics.removeAt(index);
  }

  value() {
    console.log(this.form.value);
  }
}
