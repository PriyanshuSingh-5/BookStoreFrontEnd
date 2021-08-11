import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

 

  // ngOnInit(): void {
  // }
  hide = true;
  title = 'demoApp';
 
  email!: string;
  password!: string;
  remail!: string;
  rpassword!: string;
  rcpassword!: string;
//
  file: any;
  isProfile = 'false';
  bookImageUrl: any;
  book = {
    bookName: null,
    authorName: null,
    price: null,
    quantity: null,
    description: null,
    imageURL: null,
  };
  constructor(
   
    private snackBar: MatSnackBar,
   
  ) {}

  register() {
       
  }
  reset() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('forgot Successful','',{duration:1000})
    }else{
      this.snackBar.open('forgot error','',{duration:1000})
    }
  }

 
  ngOnInit() {}

  onFormSubmit() {
    
          };
        }
      

        //
        
       
        
        
      