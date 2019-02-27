import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';
import { IphonePriceSheetComponent } from './iphone-price-sheet/iphone-price-sheet.component';
import { IPadPriceSheetComponent } from './ipad-price-sheet/ipad-price-sheet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  
  // { path: 'pricing',component:PricingComponent,
  //   children: [
  //     { path: 'iPhonePriceSheet', component: IphonePriceSheetComponent },
  //     { path: 'iPadPriceSheet', component: IPadPriceSheetComponent },
  //   ],
  // }
  { path: 'pricing',component:PricingComponent},
  { path: 'iPhonePriceSheet', component: IphonePriceSheetComponent },
  { path: 'iPadPriceSheet', component: IPadPriceSheetComponent },
{path:'rest-api',component:RestApiComponent},
{path:'form-test',component:FormComponent},
  { path: '**', component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
