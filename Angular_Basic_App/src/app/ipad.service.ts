import { Injectable } from '@angular/core';
import { IPad } from '../ipad';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IPadService {
  ipads: IPad[] = [
    { name: "iPad Pricesheet01", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet02", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "draft" },
    { name: "iPad Pricesheet03", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet04", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "draft" },
    { name: "iPad Pricesheet05", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
    { name: "iPad Pricesheet06", date: new Date().toString().substring(0, 15), createdBy: "XXXXXX", modifiedBy: "XXXXXX", status: "publish" },
  ]

  ipadss: IPad = new IPad('')

  constructor(private http: HttpClient) { }
  /**
   * getIpadPriceSheets
   */
  public getIpadPriceSheets(): IPad[] {
    return this.ipads
  }
  abc(): string {
    return ''
  }

  xyz(): number {
    return 5
  }
}
