import { CartTotal } from './../models/cartItems';
import { AdditionalService } from 'src/app/models/additionalService';
import { Injectable } from '@angular/core';
import { Car } from '../models/cars';
import { CartItem } from '../models/cartItem';
import { AdditionalCartItems, CartItems } from '../models/cartItems';
import { AdditionalCartItem } from '../models/additionalCartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id);
    let total:number;
    if(item){
      item.quantity+=1;
      item.total +=  item.quantity*item.car.dailyPrice
      CartTotal.push(item.total)
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity =1;
      cartItem.total += cartItem.quantity*cartItem.car.dailyPrice
      CartTotal.push(cartItem.total)
      CartItems.push(cartItem)
      //console.log(cartItem)
    }
  }
  addToCart2(additionalService:AdditionalService){
    let item = AdditionalCartItems.find(c=>c.additionalService.id===additionalService.id);
    if(item){
      item.quantity+=1;
      item.total += item.quantity*item.additionalService.price
      CartTotal.push(item.total)
    }else{
      let cartItem = new AdditionalCartItem();
      cartItem.additionalService = additionalService;
      cartItem.quantity =1;
      cartItem.total += cartItem.quantity*cartItem.additionalService.price
      CartTotal.push(cartItem.total)
      AdditionalCartItems.push(cartItem)
     // console.log(cartItem)
    }
    this.getTotal()
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item),1); //splice silmek için kullanılır (git bellekteki yerini indeksini bul ve 1 tane sil)
  }

  list():CartItem[]{
    return CartItems;
  }
  list2():AdditionalCartItem[]{
    return AdditionalCartItems;
  }
  list3():number[]{
    console.log(CartTotal.reduce((a, b) => a + b, 0))
    return CartTotal
  }
  
  getTotal():any{
    CartItems.forEach(element => {
      console.log(element.total)
      return element.total
    });
    return 0;
  }
  getAliTotal():any{
    let total2 = 0;
    AdditionalCartItems.forEach(element => {
      total2 = total2 + element.quantity * element.additionalService.price   
    });
    return total2;
  }
}
