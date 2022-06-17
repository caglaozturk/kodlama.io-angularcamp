import { AdditionalCartItems } from './../../../models/cartItems';

import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  additionalCartItems:AdditionalCartItem[] = []

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems = this.cartService.list2();
    console.log("heyooo")
    console.log(this.cartItems)
  }
}
