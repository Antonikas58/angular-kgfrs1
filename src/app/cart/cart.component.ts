
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  constructor(
  private cartService: CartService

  ) { }

 ngOnInit() {
    this.items = this.cartService.getItems();
  }
 ClearCart(){
   this.cartService.clearCart();
   this.items = this.cartService.getItems();
   window.alert('Your products has been deleted from the cart!');
 }
}