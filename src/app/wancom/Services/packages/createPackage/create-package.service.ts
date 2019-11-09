import { Injectable } from '@angular/core';
import { PackageApi } from 'src/app/shared/sdk';
import { GetAllPackagesService } from '../getAllPackages/get-all-packages.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePackageService {

  constructor(public PackageApi:PackageApi,public PackageListService:GetAllPackagesService) { }

  public addPackage(packageObj: any){
    console.log("add Package Function")
    this.PackageApi.create(packageObj).subscribe(res=>{
      console.log('package added succesfully',res);
      this.PackageListService.setAllPackages()
    },
    error=>{
      console.log("error occoured while creating package",error)
    })
  }
  
  public EditPackage(packageId,packageToBeUpdated){
    console.log('package ID',packageId,"package tobe updated is ",packageToBeUpdated)
    this.PackageApi.updateAttributes(packageId,packageToBeUpdated).subscribe(res=>{
      console.log('package added succesfully',res);
      this.PackageListService.setAllPackages()
    },
    error=>{
      console.log("error occoured while creating package",error)
    })
  }

}
