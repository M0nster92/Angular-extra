import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormOneService {
  constructor(private fb: FormBuilder) {}

  infoForm = this.fb.group({
    name: [''],
    age: [''],
  });

  testForm: FormGroup = new FormGroup({
    name: new FormControl({ value: '' }),
    age: new FormControl({ value: '' }),
  });
}
