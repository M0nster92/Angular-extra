import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOutputComponent } from './nested-output.component';

describe('NestedOutputComponent', () => {
  let component: NestedOutputComponent;
  let fixture: ComponentFixture<NestedOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
