import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent  {

  //form
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
   forgot() {
     if(this.email=="admin" && this.password=="admin"){
         this.snackBar.open('forgot Successful','',{duration:1000})
     }else{
       this.snackBar.open('forgot error','',{duration:1000})
     }
   }
 
  }

