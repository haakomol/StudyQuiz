import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface CustomDialogData {
  title: string;
  contentText: string;
  buttonConfirmText: string;
  buttonCancelText?: string;
  navigateHomeOnConfirm?: boolean;
}

@Component({
  selector: 'app-customizable-dialog',
  templateUrl: './customizable-dialog.component.html',
  styleUrls: ['./customizable-dialog.component.css']
})
export class CustomizableDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: CustomDialogData,
    private router: Router) { }

  ngOnInit() {
  }

  confirm() {
    if (this.dialogData.navigateHomeOnConfirm) {
      this.router.navigate(['/']);
    }
  }
}
