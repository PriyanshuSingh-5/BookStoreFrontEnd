import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  rating:number = 0;
  starCount:number = 5;
 // starColor:StarRatingColor = StarRatingColor.accent;
  // starColor:StarRatingColor = StarRatingColor.accent;
  Book!: object;
  bookIdentifier!: string;
  Review:string = "";
  ratingsArray:any; 
  constructor(private activatedRoute:ActivatedRoute,
  
    private snackbar:MatSnackBar) { }
  getBook(id:number){
    
  }
  getReviews(id:number){
    
  }
  ngOnInit(): void {
    
  }
  // onRatingChanged(rating: number){
  //   console.log(rating);
  //   this.rating = rating;
  // }
  // onFeedbackClicked()
  // {
   
  // }
  AddToWishlist(){
    
  }
  NotifyMe(){
  }
}




