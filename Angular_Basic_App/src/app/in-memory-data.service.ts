import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb(){
const ipads=[
  { name: "iPad Pricesheet01", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet02", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "draft" },
    { name: "iPad Pricesheet03", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet04", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "draft" },
    { name: "iPad Pricesheet05", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet06", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },

];
return {ipads};
}

  constructor() { 
    
  }
  
}
