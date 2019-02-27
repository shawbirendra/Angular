import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonePriceSheetComponent } from './iphone-price-sheet.component';

describe('IphonePriceSheetComponent', () => {
  let component: IphonePriceSheetComponent;
  let fixture: ComponentFixture<IphonePriceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphonePriceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphonePriceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
