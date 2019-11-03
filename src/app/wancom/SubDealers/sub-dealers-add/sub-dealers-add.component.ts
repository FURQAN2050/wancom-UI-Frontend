import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-dealers-add',
  templateUrl: './sub-dealers-add.component.html',
  styleUrls: ['./sub-dealers-add.component.scss']
})
export class SubDealersAddComponent implements OnInit {
  subDealer:any={};
  mainDealersList=[{no:1 , name:"AR Net"},{no:2,name:"Safoora Net"}]
  constructor() { }

  ngOnInit() {
  }

}
