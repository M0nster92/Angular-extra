import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  form_template = [
    {
      type: 'textBox',
      label: 'Name',
    },
    {
      type: 'number',
      label: 'Age',
    },
    {
      type: 'select',
      label: 'favorite book',
      options: ['Jane Eyre', 'Pride and Prejudice', 'Wuthering Heights'],
    },
    {
      type: 'number',
      label: 'year',
    },
  ];

  formGroup: any;

  constructor() {}

  ngOnInit(): void {
    var group: { [key: string]: any } = {};
    this.form_template.forEach((e) => {
      group[e.label] = new FormControl('');
    });

    console.log(group);
    this.formGroup = new FormGroup(group);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
