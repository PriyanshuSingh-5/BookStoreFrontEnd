import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

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
   login() {
     if(this.email=="admin" && this.password=="admin"){
         this.snackBar.open('Login Successful','',{duration:1000})
     }else{
       this.snackBar.open('Login error','',{duration:1000})
     }
   }
 }
 

