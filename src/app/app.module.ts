import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { DashboardComponent } from './wancom/dashboard/dashboard.component';
import { DealersComponent } from './wancom/dealers/dealers.component';
import { SalesreportComponent } from './wancom/salesreport/salesreport.component';
import { BalancesheetComponent } from './wancom/balancesheet/balancesheet.component';
import { SalessummaryComponent } from './wancom/salessummary/salessummary.component';
import { ProductwisesalesComponent } from './wancom/productwisesales/productwisesales.component';
import { PackageComponent } from './wancom/package/package.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    // DashboardComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
