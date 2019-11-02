import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealersMainComponent } from './wancom/Dealers/dealers-main/dealers-main.component';
import { AddDealerComponent } from './wancom/Dealers/add-dealer/add-dealer.component';
import { PackagesMainComponent } from './wancom/Packages/packages-main/packages-main.component';



const routes: Routes = [
  {path:'dealers',component:DealersMainComponent},
  {path:'addDealer',component:AddDealerComponent},
  {path:'packages',component:PackagesMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
