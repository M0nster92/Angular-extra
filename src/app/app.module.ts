import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayBindingComponent } from './twoWay-binding/twoWay-binding.component';
import { OutputComponent } from './output/output.component';
import { NestedOutputComponent } from './output/nested-output/nested-output.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FormComponent } from './form/form.component';
import { ServiceFormComponent } from './form/service-form/service-form.component';
import { ReactFormComponent } from './react-form/react-form/react-form.component';
import { FormArrayComponent } from './react-form/form-array/form-array.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CustomObjectFormComponent } from './custom-object-form/custom-object-form.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    TwoWayBindingComponent,
    OutputComponent,
    NestedOutputComponent,
    ElementRefComponent,
    InputFormatDirective,
    CustomDirectiveComponent,
    FormComponent,
    ServiceFormComponent,
    ReactFormComponent,
    FormArrayComponent,
    DynamicFormComponent,
    CustomObjectFormComponent,
    NgClassComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
