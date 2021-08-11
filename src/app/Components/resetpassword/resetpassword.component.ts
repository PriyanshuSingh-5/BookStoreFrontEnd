import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent  {

  // constructor() { }

  // ngOnInit(): void {
  // }
  hide = true;
  title = 'demoApp';
 
  email!: string;
  password!: string;
  remail!: string;
  rpassword!: string;
  rcpassword!: string;
 
   constructor(private snackBar:MatSnackBar){
 
   }
   register() {
 
   }
   reset() {
     if(this.email=="admin" && this.password=="admin"){
         this.snackBar.open('reset Successful','',{duration:1000})
     }else{
       this.snackBar.open('reset error','',{duration:1000})
     }
   }
 
  }


