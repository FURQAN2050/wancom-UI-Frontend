import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {
  dealersList=[
    {no:1,name:"AR Net",subDealers:"20"},
    {no:2,name:"Safoora Net",subDealers:"2"},
    {no:3,name:"UZ Net",subDealers:"30"},
    {no:4,name:"Virgo Net",subDealers:"9"},
    {no:5,name:"Waseem Net",subDealers:"12"},
    {no:6,name:"Rizwi Link",subDealers:"14"},
    {no:7,name:"ZN Network",subDealers:"17"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
