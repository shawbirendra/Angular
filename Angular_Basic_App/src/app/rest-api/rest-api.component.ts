import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPadService } from '../ipad.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
public uri='';
  constructor(private http: HttpClient) { }
httpUrl=new FormControl('https://jsonplaceholder.typicode.com/todos/1');
public result: any;
  ngOnInit() {
   
  }
  getReq(){
    this.http.get(this.httpUrl.value,{responseType:"json"}).subscribe((response)=>{
      console.log("data : "+response);
       this.result=JSON.stringify(response);
    });
  }

}
