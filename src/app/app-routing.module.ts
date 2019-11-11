import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealersMainComponent } from './wancom/Dealers/dealers-main/dealers-main.component';
import { AddDealerComponent } from './wancom/Dealers/add-dealer/add-dealer.component';
import { PackagesMainComponent } from './wancom/Packages/packages-main/packages-main.component';
import { SubDealersMainComponent } from './wancom/SubDealers/sub-dealers-main/sub-dealers-main.component';
import { DealersListComponent } from './wancom/Dealers/dealers-list/dealers-list.component';


const routes: Routes = [
  {path:'dealers',component:DealersMainComponent},
  {path:'addDealer',component:AddDealerComponent},
  {path:'packages',component:PackagesMainComponent},
  {path:'subdealers',component:SubDealersMainComponent},
  {path:'',redirectTo:'dealers',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
