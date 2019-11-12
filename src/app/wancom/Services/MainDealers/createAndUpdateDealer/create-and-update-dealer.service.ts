
import { Injectable } from '@angular/core';
import { MainDealerApi, SubDealerApi, SubDealerPackageApi } from 'src/app/shared/sdk';
@Injectable({
  providedIn: 'root'
})
export class CreateAndUpdateDealerService {

  constructor(public DealerApi: MainDealerApi, public SubDealerApi: SubDealerApi, public subDealersPackagesApi: SubDealerPackageApi) { }

  public createDealer(mainDealerObject, mainDealersSubDealers?: any, subDealerPackages?: any) {
    this.DealerApi.create(mainDealerObject).subscribe((mainDealer: any) => {
      //this.createSubDealerOfMainDealer(mainDealerObject,mainDealer.id); //add main dealer as a sub Dealer also.
      if (mainDealersSubDealers != 'undefined')
        this.createMainDealerSubDealers(mainDealersSubDealers, mainDealer.id);

    }, error => { })

  }

  updateDealer() {

  }

  private createSubDealerOfMainDealer(subDealer: any, mainDealerId: any) {
    subDealer.mainDealerId = mainDealerId;
    this.SubDealerApi.create(subDealer).subscribe(res => {
      console.log("Sub Dealer Added Succesfully.")
    }, er => {
      console.log('getting error in create and Update Dealer.', er)
    })
  }

  private createMainDealerSubDealers(subDealersArray, mainDealerId) {
    subDealersArray.forEach((subDealer: any) => {
      console.log("sub Dealer", subDealer)
      let subDealerObj = { name: subDealer.name, phoneNumber: subDealer.phoneNumber, mainDealerId: mainDealerId }
      this.SubDealerApi.create(subDealerObj).subscribe((createdSubDealer: any) => {
        console.log('subDealer created Succesfully', createdSubDealer);
        if (subDealer.subDealersPackages)
          this.createSubDealerPackages(subDealer.subDealersPackages, createdSubDealer.id)
      })
    });
    //  let subDealers=this.addMainDealerIdInSubDealers(subDealersArray,mainDealerId);
    //  console.log('subDealers')
    // this.SubDealerApi.createMany(subDealers).subscribe(subDealers=>{
    //   console.log('All sub Dealers of Main Dealers Created.',subDealers)
    // },er=>{
    //   console.log('all subDealers of Main Dealers not created ',er)
    // })
  }

  private createSubDealerPackages(subDealerPackages, createdSubDealerId) {
    let subDealerPackagesWithSubDealerId: any = this.addSubDealerIdInPackages(subDealerPackages, createdSubDealerId)
    console.log("sub Dealer packages ready to Start.", subDealerPackagesWithSubDealerId)
    this.subDealersPackagesApi.createMany(subDealerPackagesWithSubDealerId).subscribe(res => {
      console.log('sub Dealer SuccessFully Created.')
    })
  }

  private addSubDealerIdInPackages(subDealerPackages, createdSubDealerId) {
    subDealerPackages.forEach(element => {
      element.subDealerId = createdSubDealerId;
    });
    return subDealerPackages
  }

  private addMainDealerIdInSubDealers(subDealersArray, mainDealerId) {
    subDealersArray.forEach(subDealer => {
      subDealer.mainDealerId = mainDealerId;
    });
    return subDealersArray
  }



}
