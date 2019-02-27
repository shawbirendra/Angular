import { Injectable } from '@angular/core';
import { Iphone } from '../Iphone';
import { IPHONE } from '../IPhonePricesheet-mock';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPhoneService {

  public getPriceSheets():Observable<Iphone[]>{
   return of(IPHONE);
  }
  constructor() { }
}
