import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllPackagesService {
  
  allPackages=[];
  constructor() { 
    
  }

  setAllPackages(){
    this.allPackages=[
      {no:1,name:"red",dPrice:"1200"},
      {no:2,name:"blue",dPrice:"1200"},
      {no:3,name:"orange",dPrice:"1200"},
      {no:4,name:"green",dPrice:"1200"},
      {no:5,name:"yellow",dPrice:"1200"},
      {no:6,name:"512 Brown",dPrice:"1200"},
      {no:7,name:"512 Kbps",dPrice:"1200"},
    ]
  }

  getAllPackages(){
    this.setAllPackages()
    return this.allPackages
  }
}
