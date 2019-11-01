import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-add-package-modal',
  templateUrl: './add-package-modal.component.html',
  styleUrls: ['./add-package-modal.component.scss']
})
export class AddPackageModalComponent implements OnInit {
  ngOnInit() { }

  constructor(
    public dialogRef: MatDialogRef<AddPackageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
