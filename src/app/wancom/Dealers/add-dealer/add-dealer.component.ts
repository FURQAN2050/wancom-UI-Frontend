import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPackageModalComponent } from '../../Modals/add-package-modal/add-package-modal.component';
@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss']
})
export class AddDealerComponent implements OnInit {
  mainDealer:any={};
  // addSubdealersOfMainDealerCheckBox=false;
  selectedSubDealerBoolean=false;  
  MainDealerSubDealersObj:any={};


  constructor(public dialog: MatDialog) { 
    this.mainDealer.mainDealerSubDealers=[]
    this.mainDealer.addSubdealersOfMainDealerCheckBox=false;
  }

  ngOnInit() { }

  
  addSubdealersOfManDealer(addSubdealerBooleancheckBox){
    console.log(addSubdealerBooleancheckBox,this.mainDealer.addSubdealersOfMainDealerCheckBox)
  }

  addSubDealerButton(){
    let obj={name:this.MainDealerSubDealersObj.name, phoneNumber:this.MainDealerSubDealersObj.phoneNumber}
    this.mainDealer.mainDealerSubDealers.push(obj)
    this.mainDealer.mainDealerSubDealers=this.mainDealer.mainDealerSubDealers.reverse();
    this.MainDealerSubDealersObj={}
  }

  openPackagesModal(){
    const dialogRef = this.dialog.open(AddPackageModalComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  //}

  }

}
