import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public dialog: MatDialog) { }
  
  openInstructions() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Instructions',
      content:`
        <p>To create a new Bistory you just need to click on the <strong>new button!</strong></p>
      
      `
    }
    this.dialog.open(DialogComponent, dialogConfig);

  }
  ngOnInit() {
  }

}
