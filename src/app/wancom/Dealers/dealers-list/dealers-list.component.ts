import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GetDealersService } from '../../Services/MainDealers/getDealers/get-dealers.service';
@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DealersListComponent implements OnInit {


  constructor(public getDealers: GetDealersService) {
    this.getDealers.getAllDealersObervable().subscribe(res => {
    })
  }

  ngOnInit() {
  }

}

