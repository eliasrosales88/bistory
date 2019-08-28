import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { NewBistoryService } from 'src/app/new-bistory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('aside',{static: false}) aside;
  isNewUser: boolean = true;
  bistories: { name: string; lastname: string; birth: Date; description: string }[] = [];
  
  constructor(  public dialog: MatDialog, 
                private newBistoryService: NewBistoryService,
  ) { }
  
  
  ngOnInit() {
    this.bistories = this.newBistoryService.bistories;
    
    
    if (this.isNewUser && localStorage.getItem('isNewUser') === null) {
      localStorage.setItem('isNewUser', 'false')
      this.openInstructions();
    }
  }

  toggleAside(){
    if (this.aside.opened === true) {
      this.aside.opened = false;
    }else if(this.aside.opened === false){
      this.aside.opened = true;

    }
  }

  openInstructions() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Instructions',
      content:`
        <p>To create a new Bistory you just need to click on the <strong>new button!</strong></p>
      
      `
    }
    this.dialog.open(DialogComponent, dialogConfig);
    this.isNewUser = false;
  }
  createNewBistory(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Create new Bistory',
      createNewBistoryForm: true,
      content:``
    }
    this.dialog.open(DialogComponent, dialogConfig);
  }

  onBistory(){
    console.log(event);
    
  }
}
