import { Component, OnInit } from '@angular/core';
import { GetAllPackagesService } from '../../Services/packages/getAllPackages/get-all-packages.service';

@Component({
  selector: 'app-packages-add',
  templateUrl: './packages-add.component.html',
  styleUrls: ['./packages-add.component.scss']
})
export class PackagesAddComponent implements OnInit {
  package :any={};
  constructor(public PackageListService:GetAllPackagesService) { 
  }

  ngOnInit() {
  }

}
