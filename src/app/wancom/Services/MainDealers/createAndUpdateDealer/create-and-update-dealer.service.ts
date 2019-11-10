
import { Injectable } from '@angular/core';
import { MainDealerApi, SubDealerApi } from 'src/app/shared/sdk';
@Injectable({
  providedIn: 'root'
})
export class CreateAndUpdateDealerService {

  constructor(public DealerApi:MainDealerApi,public SubDealerApi:SubDealerApi) { }

  public createDealer(mainDealerObject,mainDealersSubDealers?:any){
    this.DealerApi.create(mainDealerObject).subscribe((mainDealer:any)=>{
      this.createSubDealerOfMainDealer(mainDealerObject,mainDealer.id); //add main dealer as a sub Dealer also.
      if(mainDealersSubDealers!='undefined')
        this.createMainDealerSubDealers(mainDealersSubDealers,mainDealer.id);
      
    },error=>{ })

  }

  updateDealer(){

  }
  
  private createSubDealerOfMainDealer(subDealer:any,mainDealerId:any){
    subDealer.mainDealerId=mainDealerId;
    console.log('subDealer',subDealer)
    this.SubDealerApi.create(subDealer).subscribe(res=>{
      console.log("Sub Dealer Added Succesfully.")
    },er=>{
      console.log('getting error in create and Update Dealer.',er)
    })
  }

  private createMainDealerSubDealers(subDealersArray,mainDealerId){
     let subDealers=this.addMainDealerIdInSubDealers(subDealersArray,mainDealerId);
     console.log('subDealers')
    this.SubDealerApi.createMany(subDealers).subscribe(subDealers=>{
      console.log('All sub Dealers of Main Dealers Created.',subDealers)
    },er=>{
      console.log('all subDealers of Main Dealers not created ',er)
    })
  }

  private addMainDealerIdInSubDealers(subDealersArray,mainDealerId){
    subDealersArray.forEach(subDealer => {
      subDealer.mainDealerId=mainDealerId;
    });
    return subDealersArray
  }



}
