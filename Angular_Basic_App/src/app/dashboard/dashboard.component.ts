import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  logoUrl:string="file:///Users/birendra.ks/Downloads/apple-logo.png";
public status:boolean=false;
  constructor() { }
public lists:Array<string>=["iPhone Price Sheet","iPad Price Sheet"];
  ngOnInit() {
  }
  myFunction(){
   this.status=!this.status;
  }
}
