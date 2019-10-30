import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  packagesList=[
    {no:1,name:"Alpha",dPrice:"500"},
    {no:2,name:"512 KBPS",dPrice:"400"},
    {no:3,name:"Blue Plus",dPrice:"600"},
    {no:4,name:"Orange Plus",dPrice:"200"},
    {no:5,name:"Red Plus",dPrice:"800"},
    {no:6,name:"Brown (12MB)",dPrice:"200"},
    {no:7,name:"Grey (16 MB)",dPrice:"1200"},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
