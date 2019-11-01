import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPackageModalComponent } from '../../Modals/add-package-modal/add-package-modal.component';
@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss']
})
export class AddDealerComponent implements OnInit {
  dealerType=[{no:1 , type:"main Dealer"},{no:2,type:"Sub Dealer"}]
  mainDealersList=[{no:1 , name:"AR Net"},{no:2,name:"Safoora Net"}]
  mainDealer:any={};
  subDealer:any={}
  
  
  mainDealerSubDealers=[];
  addSubdealersOfMainDealerCheckBox=false;
  AddSubDealersOfMainDealerBoolean=false;
  addSubDealerBoolean=false;
  MainDealerSubDealersObj:any={};
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectDealerType(ev:any ){
     console.log(ev)
    if(ev.value==2)
      this.addSubDealerBoolean=true;
    else{
      this.addSubDealerBoolean=false; 
      this.AddSubDealersOfMainDealerBoolean=false;
    }
  }
  
  addSubdealersOfManDealer(addSubdealerBooleancheckBox){
    console.log(addSubdealerBooleancheckBox,this.addSubdealersOfMainDealerCheckBox)
  }
  addSubDealerButton(){
    let obj={name:this.MainDealerSubDealersObj.name, phoneNumber:this.MainDealerSubDealersObj.phoneNumber}
    this.mainDealerSubDealers.push(obj)
    this.mainDealerSubDealers=this.mainDealerSubDealers.reverse();
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
