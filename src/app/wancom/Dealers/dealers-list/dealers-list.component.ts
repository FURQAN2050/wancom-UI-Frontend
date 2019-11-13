import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GetDealersService } from '../../Services/MainDealers/getDealers/get-dealers.service';
import { MainDealerApi, SubDealerApi, SubDealerPackageApi } from 'src/app/shared/sdk';
import {faChild,faInfoCircle ,faPhone,faStar}  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.scss'],
})

export class DealersListComponent implements OnInit {
  mainDealersList=[];
  // icons
  faChild=faChild; faCircle=faInfoCircle;faPhone=faPhone;faStar=faStar;
  
  selectedMainDealer={};
  selectedmainDealerSubDealers=[];

  constructor(public getDealers: GetDealersService,public mainDealerApi:MainDealerApi,public subDealerApi:SubDealerApi,public subDealerPackagesApi:SubDealerPackageApi) {
    this.getMainDealerList();
  }
  
  getMainDealerList(){
    this.getDealers.getAllDealersObervable().subscribe(res => {
      this.mainDealersList=res;
    })
  }
  
  initializeIcons(){

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
        this.subDealerPackagesApi.find({where:{subDealerId:subDealer.id},include:["package"]}).subscribe(subDealerPackages=>{
          subDealer.subDealersPackages=subDealerPackages
          console.log(subDealerPackages);
        })
      });
    })
  }

  getItems(ev: any) {
    this.getMainDealerList();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.mainDealersList= this.mainDealersList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

