import { Component, OnInit } from '@angular/core';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';
import { AdditionalService } from 'src/app/models/additionalService';
import { Car } from 'src/app/models/cars';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[] = [];
  additionalCartItems:AdditionalCartItem[]=[]
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems = this.cartService.list2();
  }
  removeFromCart(car:Car){
    this.cartService.removeFromCart(car)
  }
  removeFromCart2(additionalService:AdditionalService){
    this.cartService.removeFromCart2(additionalService)
  }
}
