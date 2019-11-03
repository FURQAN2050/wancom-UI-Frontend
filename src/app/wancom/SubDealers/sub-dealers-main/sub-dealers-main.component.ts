import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-dealers-main',
  templateUrl: './sub-dealers-main.component.html',
  styleUrls: ['./sub-dealers-main.component.scss']
})
export class SubDealersMainComponent implements OnInit {

  addSubDealerBoolean=false;
  constructor() { }

  ngOnInit() {
  }

  addSubDealerbuttonClicked(){
    this.addSubDealerBoolean=true;
  }

}
