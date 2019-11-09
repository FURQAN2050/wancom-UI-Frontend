import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GetAllPackagesService } from '../../Services/packages/getAllPackages/get-all-packages.service';


@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss']
})
export class PackagesListComponent implements OnInit {
  displayedColumns: string[] = ['code','name','defaultPrice','edit'];
  dataSource: MatTableDataSource<any>;
  addPackageMode=true;
  editPackageMode=false;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public PackagesListService:GetAllPackagesService) {
    this.getAllPackages();
  }
  
  getAllPackages(){
    this.PackagesListService.getAllPackagesObervable().subscribe((res :any)=>{
      this.dataSource = new MatTableDataSource(res);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnInit() {
    this.getAllPackages();
  }
  
  selectedRow(row){
    console.log(row);
    this.PackagesListService.setSelectedPackage(row);
  }
 
}

  


