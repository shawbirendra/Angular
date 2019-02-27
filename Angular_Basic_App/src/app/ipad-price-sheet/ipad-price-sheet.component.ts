import { Component, OnInit } from '@angular/core';
import { IPadService } from '../ipad.service';
import { IPad } from '../../ipad';

@Component({
  selector: 'app-ipad-price-sheet',
  templateUrl: './ipad-price-sheet.component.html',
  styleUrls: ['./ipad-price-sheet.component.css']
})
export class IPadPriceSheetComponent implements OnInit {
  private ipads:IPad[];
  constructor(private ipadservice:IPadService) { }

  ngOnInit() {
    this.ipads=this.ipadservice.getIpadPriceSheets();
  }
  proceed(input:string){
    
  }
}
