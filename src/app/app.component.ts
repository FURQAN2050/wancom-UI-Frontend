
import { Component } from '@angular/core';
import { LoopBackAuth } from './shared/sdk';
import { LoopBackConfig } from './shared/sdk/index';
import { BASE_URL, API_VERSION } from './base.url';
import { GetAllPackagesService } from './wancom/Services/packages/getAllPackages/get-all-packages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public LoopBackAuthService:LoopBackAuth,public PackagesListService:GetAllPackagesService){
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.initiatePackagesService()
  }
  title = 'Wancom';

  initiatePackagesService(){
    this.PackagesListService.setAllPackages();
  }
}
