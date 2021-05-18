import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-object-form',
  templateUrl: './custom-object-form.component.html',
  styleUrls: ['./custom-object-form.component.css'],
})
export class CustomObjectFormComponent implements OnInit {
  form_template: any = [];
  form: any;
  showInitForm = false;
  optionsUI = false;
  formGroup: any;
  generatedForm = false;

  constructor() {}

  ngOnInit(): void {}

  formInit() {
    this.showInitForm = true;
    this.form = new FormGroup({
      label: new FormControl(''),
      type: new FormControl(''),
      options: new FormArray([]),
      value: new FormControl(''),
    });
  }

  get Type() {
    //console.log(this.form.get('type').value);
    return this.form.get('type') as FormArray;
  }

  get Options() {
    return this.form.get('options') as FormArray;
  }

  removeOption(option: any) {
    //console.log('Clicked');
    let index = this.Options.controls.indexOf(option);
    this.Options.removeAt(index);
  }

  addOptions(option: HTMLInputElement) {
    (this.form.get('options') as FormArray).push(new FormControl(option.value));
    option.value = '';
    console.log(this.form.value);
    this.optionsUI = true;
  }

  FormData() {
    this.form_template.push(this.form.value);
    console.log(this.form_template);
    this.form.reset();
    this.optionsUI = false;
    this.generateForm();
  }

  generateForm() {
    var group: { [key: string]: any } = {};
    this.form_template.forEach((e: any) => {
      group[e.label] = new FormControl('');
    });

    console.log(group);
    this.generatedForm = true;
    this.formGroup = new FormGroup(group);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
