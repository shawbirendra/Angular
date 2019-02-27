import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadPriceSheetComponent } from './ipad-price-sheet.component';

describe('IPadPriceSheetComponent', () => {
  let component: IPadPriceSheetComponent;
  let fixture: ComponentFixture<IPadPriceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPadPriceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPadPriceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
