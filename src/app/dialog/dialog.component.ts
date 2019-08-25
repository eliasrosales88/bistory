import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewBistoryService } from '../new-bistory.service';

export interface DialogData {
  title: string;
  content: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  newBistory: FormGroup;
  startDate = new Date(1930, 0, 1);

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
    private newBistoryService: NewBistoryService, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.newBistory = new FormGroup({
      'name': new FormControl(null),
      'lastname': new FormControl(null),
      'birth': new FormControl()
    });
  }

  onCreateBistory(){
    console.log(this.newBistory);
    const result = this.newBistory.value;

    // Here is pushed the new bistory to the newBistoryService
    this.newBistoryService.bistories.push(result);
    
  }

  close(): void {
    this.dialogRef.close();
  }
}
