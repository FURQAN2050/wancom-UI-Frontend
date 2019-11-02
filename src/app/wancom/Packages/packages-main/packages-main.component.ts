import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-main',
  templateUrl: './packages-main.component.html',
  styleUrls: ['./packages-main.component.scss']
})
export class PackagesMainComponent implements OnInit {
  addPackageBoolean=false;
  constructor() { }

  ngOnInit() {
  }

  addPackagebuttonClicked(){
    this.addPackageBoolean=true;
  }

}
