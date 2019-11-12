import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPackageModalComponent } from '../../Modals/add-package-modal/add-package-modal.component';
import { CreateAndUpdateDealerService } from '../../Services/MainDealers/createAndUpdateDealer/create-and-update-dealer.service';
@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss']
})
export class AddDealerComponent implements OnInit {
  addMode = false;
  editMode = false;
  
  mainDealer: any = {};
  mainDealerSubDealer:any={};
  mainDealerSubDealersList:any=[];
  subDealersPackages:any=[]
  

  constructor(public dialog: MatDialog,public createDealer:CreateAndUpdateDealerService) {
    // this.mainDealerSubDealersList=[]
    this.mainDealer.addSubdealersOfMainDealerCheckBox = false; //checkbox for adding subDealer.
  }

  ngOnInit() { }

  addSubdealersOfManDealer(addSubDealerBoolean){
    console.log(addSubDealerBoolean);
  }

  addSubDealerButton() {
    let obj = { name:this.mainDealerSubDealer.name, phoneNumber:this.mainDealerSubDealer.phoneNumber }
    this.mainDealerSubDealersList.push(obj)
    this.mainDealerSubDealersList = this.mainDealerSubDealersList.reverse();
    this.mainDealerSubDealer={}
  }

  
  addDealerButtonbuttonClicked() {
    this.addMode = true;
    this.editMode = false;
    this.mainDealer = {};
  }

  resetDealer() {
    this.addMode = false;
    this.editMode = false;
    this.mainDealer = true;
  }

  removeSubDealer(index){
    this.mainDealerSubDealersList.splice(index,1);
  }

  addDealer(){
    let mainDealerObject={name:this.mainDealer.name,phoneNumber:this.mainDealer.phoneNumber};
    if(this.mainDealer.addSubdealersOfMainDealerCheckBox && this.mainDealerSubDealersList.length>0)
      this.createDealer.createDealer(mainDealerObject,this.mainDealerSubDealersList);
    else
      this.createDealer.createDealer(mainDealerObject,'undefined');
    this.resetForm();
  }

  resetForm(){
    this.mainDealer={};
    this.mainDealerSubDealer={};
    this.mainDealerSubDealersList=[];
    this.subDealersPackages=[];
    this.addMode = false;
    this.editMode = false;
  }

  editDealer(){

  }

  openPackagesModal(subDealerArrayIndex) {
    let dataSendtoModal :any=[];
    
    if((this.mainDealerSubDealersList[subDealerArrayIndex].subDealersPackages)){
      console.log((this.mainDealerSubDealersList[subDealerArrayIndex].subDealersPackages));
      dataSendtoModal=this.mainDealerSubDealersList[subDealerArrayIndex].subDealersPackages;
    }
    
    const dialogRef = this.dialog.open(AddPackageModalComponent, {
      // width: '600px;',
      data: {packagesList:dataSendtoModal}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result.updated){
        this.mainDealerSubDealersList[subDealerArrayIndex].subDealersPackages=result.updated;
        console.log(this.mainDealerSubDealersList)
      }
    });
    
  }

}
