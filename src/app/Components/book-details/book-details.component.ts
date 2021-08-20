import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // constructor() { }
  // ngOnInit(): void {
  // }
  starRating = 0;
  rating3!: number;
  //rating:number = 0;
 // starCount:number = 5;
 // starColor:StarRatingColor = StarRatingColor.accent;
  // starColor:StarRatingColor = StarRatingColor.accent;
  Book!: object;
  bookIdentifier!: string;
  Review:string = "";
  ratingsArray:any; 
  
    @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  public ratingArr = [];

  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    // console.log("a "+this.starCount)
    // for (let index = 0; index < this.starCount; index++) {
    //   this.ratingArr.push(index);
     
    }
  
  AddToWishlist(){
    
  }
  AddToBag(){
  }
  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}


  
  // onRatingChanged(rating: number){
  //   console.log(rating);
  //   this.rating = rating;
  // }
  // onFeedbackClicked()
  // {
   
  // }
 







