import { Injectable } from '@angular/core';
import { Package, PackageApi } from 'src/app/shared/sdk';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetAllPackagesService {
  
  private allPackagesSubject = new BehaviorSubject([]);
  private selectedPackageSubject = new Subject();
  constructor(public PackageApi:PackageApi) { 
  }

  setAllPackages(){
    this.PackageApi.find().subscribe(res=>{
      res=res.reverse();
      this.allPackagesSubject.next(res);
      console.log("packages set Succesfully",res);
    },er=>{
      console.log("error occured while getting  all packages",er)
    })
  }

  getAllPackagesObervable(){
    return this.allPackagesSubject.asObservable()
  }
  
  public setSelectedPackage(Package: any) {
    this.selectedPackageSubject.next(Package);
  }
  public getselectedPackageObservable() {
    return this.selectedPackageSubject.asObservable();
  }
}
