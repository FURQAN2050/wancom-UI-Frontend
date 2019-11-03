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
  displayedColumns: string[] = ['name','dPrice'];
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(public getPackagesListService:GetAllPackagesService) {
       this.dataSource = new MatTableDataSource(this.getPackagesListService.getAllPackages());
       console.log(this.dataSource)
  }
}

  


