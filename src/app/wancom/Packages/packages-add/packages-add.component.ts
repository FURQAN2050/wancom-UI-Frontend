import { Component, OnInit } from '@angular/core';
import { GetAllPackagesService } from '../../Services/packages/getAllPackages/get-all-packages.service';
import { PackageApi } from 'src/app/shared/sdk';
import { CreatePackageService } from '../../Services/packages/createPackage/create-package.service';

@Component({
  selector: 'app-packages-add',
  templateUrl: './packages-add.component.html',
  styleUrls: ['./packages-add.component.scss']
})
export class PackagesAddComponent implements OnInit {
  package :any={};
  addMode=false;
  editMode=false;

  constructor(public PackageListService:GetAllPackagesService,public packageList:GetAllPackagesService,public createandEditPackageService:CreatePackageService) { 
  }

  ngOnInit() {
    this.getPackageToBeEdited(); //its just chk if their any package tobe Updated OrNot.
  }


  getPackageToBeEdited(){
    this.PackageListService.getselectedPackageObservable().subscribe(res=>{
      if(res==null){
        this.resetPackage()
      }
      else{
        this.editMode=true;
        this.addMode=false;
        this.package=res;
      }
    })
  }

  editPackage(){
    this.createandEditPackageService.EditPackage(this.package.id,this.package);
    this.resetPackage();
  }

  addPackage(){
    console.log('in add Package Function')
      let packageObj={
        name:this.package.name,
        code :this.package.code,
        defaultPrice:this.package.defaultPrice,
      }
      this.createandEditPackageService.addPackage(this.package);  
      this.package={}; 
  }

  addPackagebuttonClicked(){
    this.addMode=true;
    this.editMode=false;
    this.package={};
  }

  resetPackage(){
    this.addMode=false;
    this.editMode=false;
    this.package=true;
  }
  

}
