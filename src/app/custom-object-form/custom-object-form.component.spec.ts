import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObjectFormComponent } from './custom-object-form.component';

describe('CustomObjectFormComponent', () => {
  let component: CustomObjectFormComponent;
  let fixture: ComponentFixture<CustomObjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomObjectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
