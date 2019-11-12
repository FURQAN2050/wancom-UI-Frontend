import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// custom components
import { DealersMainComponent } from './wancom/Dealers/dealers-main/dealers-main.component';
import { AddDealerComponent } from './wancom/Dealers/add-dealer/add-dealer.component';

//modals
import { AddPackageModalComponent } from './wancom/Modals/add-package-modal/add-package-modal.component';

// angular material exports
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';


import { PackagesMainComponent } from './wancom/Packages/packages-main/packages-main.component';
import { PackagesAddComponent } from './wancom/Packages/packages-add/packages-add.component';
import { PackagesListComponent } from './wancom/Packages/packages-list/packages-list.component';

// handsonattable
import { HotTableModule } from '@handsontable/angular';
import { SubDealersMainComponent } from './wancom/SubDealers/sub-dealers-main/sub-dealers-main.component';
import { SubDealersAddComponent } from './wancom/SubDealers/sub-dealers-add/sub-dealers-add.component';
import { SidebarComponent } from './wancom/components/sidebar/sidebar.component';
import { NavbarComponent } from './wancom/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// loopback browser sdk module
import { SDKBrowserModule } from './shared/sdk/index';
import { DealersListComponent } from './wancom/Dealers/dealers-list/dealers-list.component';
@NgModule({
  entryComponents:[AddPackageModalComponent],
  declarations: [
    AppComponent,
    DealersMainComponent,
    AddDealerComponent,
    AddPackageModalComponent,
    PackagesMainComponent,
    PackagesAddComponent,
    PackagesListComponent,
    SubDealersMainComponent,
    SubDealersAddComponent,
    SidebarComponent,
    NavbarComponent,
    DealersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SDKBrowserModule.forRoot(),
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    HotTableModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
