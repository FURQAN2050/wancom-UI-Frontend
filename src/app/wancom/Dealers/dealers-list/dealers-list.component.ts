import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GetDealersService } from '../../Services/MainDealers/getDealers/get-dealers.service';
import { MainDealerApi, SubDealerApi, SubDealerPackageApi } from 'src/app/shared/sdk';
@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.scss'],
})

export class DealersListComponent implements OnInit {
  mainDealersList=[];
  
  selectedMainDealer={};
  selectedmainDealerSubDealers=[];

  constructor(public getDealers: GetDealersService,public mainDealerApi:MainDealerApi,public subDealerApi:SubDealerApi,public subDealerPackagesApi:SubDealerPackageApi) {
    this.getDealers.getAllDealersObervable().subscribe(res => {
      this.mainDealersList=res;
    })
  }

  ngOnInit() { }

  openExpansionPanel(mainDealer){
    this.gettingMainDealerDetails(mainDealer.id);
    this.gettingSubDealersDetails(mainDealer.id);
  }

  gettingMainDealerDetails(mainDealerId){
    this.mainDealerApi.findById(mainDealerId).subscribe(mainDealer=>{
      this.selectedMainDealer=mainDealer;
      console.log('main dealer is ',mainDealer);
    })

  }

  gettingSubDealersDetails(mainDealerId){
    this.subDealerApi.find({where:{mainDealerId:mainDealerId}}).subscribe(mainDealerSubDealers=>{
      console.log("mainDealer subDealers Array",mainDealerSubDealers)
      this.selectedmainDealerSubDealers=mainDealerSubDealers;
      
      this.selectedmainDealerSubDealers.forEach(subDealer => {
        this.subDealerPackagesApi.find({where:{subDealerId:subDealer.id}}).subscribe(subDealerPackages=>{
          subDealer.subDealersPackages=subDealerPackages
          console.log(subDealerPackages);
        })
      });
    })
  }

}

