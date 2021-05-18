import { Component, OnInit } from '@angular/core';
import { FormOneService } from '../../form-services/form-one.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css'],
})
export class ServiceFormComponent implements OnInit {
  constructor(public formService: FormOneService) {}

  ngOnInit(): void {
    console.log(this.formService.infoForm.value.name);
  }
  infoFormValue() {
    console.log(this.formService.infoForm.value);
  }
}
