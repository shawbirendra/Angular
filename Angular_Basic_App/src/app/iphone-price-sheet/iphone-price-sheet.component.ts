import { Component, OnInit } from '@angular/core';
import { IPhoneService } from '../iphone.service';
import { Iphone } from '../../Iphone';

@Component({
  selector: 'app-iphone-price-sheet',
  templateUrl: './iphone-price-sheet.component.html',
  styleUrls: ['./iphone-price-sheet.component.css'],
})
export class IphonePriceSheetComponent implements OnInit {
  pricesheets: Iphone[]
  constructor(private iphoneService: IPhoneService) { }
  getPriceSheets(): void {
    this.iphoneService.getPriceSheets().subscribe(sheets => this.pricesheets = sheets);
  }
  ngOnInit() {
    this.getPriceSheets();
  }

}
