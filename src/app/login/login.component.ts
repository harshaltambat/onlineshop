import { Component, OnInit } from '@angular/core';
import { DialogRole, MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public dialog:MatDialog) { }

 
  openDialog(){
    const dialogRef=this.dialog.open(HomeComponent);
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
