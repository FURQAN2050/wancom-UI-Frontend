import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { GetAllPackagesService } from '../../Services/packages/getAllPackages/get-all-packages.service';
@Component({
  selector: 'app-add-package-modal',
  templateUrl: './add-package-modal.component.html',
  styleUrls: ['./add-package-modal.component.scss']
})
export class AddPackageModalComponent implements OnInit {
  ngOnInit() { }
  packageList: any = []
  packagesTobeAdded: any = []

  constructor(public dialogRef: MatDialogRef<AddPackageModalComponent>, @Inject(MAT_DIALOG_DATA) public MatDialogData: any,
    public getAllpackages: GetAllPackagesService,
  ) {
    this.getpackageList();

  }

  getpackageList() {
    this.getAllpackages.getAllPackagesObervable().subscribe(res => {
      this.packageList = res;
      console.log('getting data fromparent container',this.MatDialogData)
      if (this.MatDialogData.packagesList.length>0) {
        console.log('package list already Exist',this.MatDialogData.packagesList)
        this.packagesTobeAdded = this.MatDialogData.packagesList
      }
      else {
        console.log('package list not  Exist')
        this.addIdtopackages(this.packageList);
      }
      console.log("getting package List in package Modal", this.packageList)
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log("packageTobe Added", this.packagesTobeAdded)
    this.dialogRef.close({updated: this.packagesTobeAdded})
  }

  addIdtopackages(packageList) {
    packageList.forEach(element => {
      let packagesTobeAddedObj = { packageId: element.id };
      this.packagesTobeAdded.push(packagesTobeAddedObj);
    });
    console.log(this.packagesTobeAdded, "packages after added package id")

  }


}
