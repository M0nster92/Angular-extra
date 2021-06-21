import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { OutputComponent } from './output/output.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FormComponent } from './form/form.component';
import { ServiceFormComponent } from './form/service-form/service-form.component';
import { FormArrayComponent } from './react-form/form-array/form-array.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CustomObjectFormComponent } from './custom-object-form/custom-object-form.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';

const routes: Routes = [
  {
    path: 'string-interpolation',
    component: StringInterpolationComponent,
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'attribute-binding',
    component: AttributeBindingComponent,
  },
  {
    path: 'class-binding',
    component: ClassBindingComponent,
  },
  {
    path: 'output',
    component: OutputComponent,
  },
  {
    path: 'elementref',
    component: ElementRefComponent,
  },
  {
    path: 'customdirective',
    component: CustomDirectiveComponent,
  },
  {
    path: 'templateform',
    component: FormComponent,
  },
  {
    path: 'serviceform',
    component: ServiceFormComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
  },
  {
    path: 'custom-form',
    component: CustomObjectFormComponent,
  },
  {
    path: 'ngclass',
    component: NgClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
