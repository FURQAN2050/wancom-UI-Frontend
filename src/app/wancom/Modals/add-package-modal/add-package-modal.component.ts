import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { GetAllPackagesService } from '../../Services/packages/getAllPackages/get-all-packages.service';
@Component({
  selector: 'app-add-package-modal',
  templateUrl: './add-package-modal.component.html',
  styleUrls: ['./add-package-modal.component.scss']
})
export class AddPackageModalComponent implements OnInit {
  ngOnInit() { }
  packageList:any=[]

  constructor(
    public dialogRef: MatDialogRef<AddPackageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public getALLpackageService:GetAllPackagesService,
    ) { 
      this.packageList=this.getALLpackageService.getAllPackages();
      console.log(this.packageList)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
