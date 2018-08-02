import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableDialogComponent } from './customizable-dialog.component';

describe('CustomizableDialogComponent', () => {
  let component: CustomizableDialogComponent;
  let fixture: ComponentFixture<CustomizableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
