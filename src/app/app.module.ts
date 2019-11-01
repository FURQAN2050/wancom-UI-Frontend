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

@NgModule({
  entryComponents:[AddPackageModalComponent],
  declarations: [
    AppComponent,
    DealersMainComponent,
    AddDealerComponent,
    AddPackageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
