import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GetDealersService } from '../../Services/MainDealers/getDealers/get-dealers.service';
@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.scss'],
})

export class DealersListComponent implements OnInit {
  mainDealersList=[];


  constructor(public getDealers: GetDealersService) {
    this.getDealers.getAllDealersObervable().subscribe(res => {
      this.mainDealersList=res;
    })
  }

  ngOnInit() {
  }

}

