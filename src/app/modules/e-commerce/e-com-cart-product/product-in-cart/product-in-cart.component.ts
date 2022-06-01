import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss']
})
export class ProductInCartComponent implements OnInit {

  countInitial = 1;
  isWhished:boolean;
  isCoupon:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  useCoupon(){
    this.isCoupon = !this.isCoupon;
  }
  deleteTask(){
    
  }
  increaseCount(){
    if(this.countInitial<=4){
      this.countInitial++;
    }
    else{
      alert('You Can Buy Only 5 Elements');
    }
  }
  decreaseCount(){
    if(this.countInitial>1){
      this.countInitial--;
    }
    else if(this.countInitial<=1){
      alert('Minimum 1 Item is required');
    }
  }
  removeProduct(){

  }
  addtoWishlist(){
    this.isWhished = !this.isWhished;
  }
}
