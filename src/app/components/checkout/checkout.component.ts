import { AddressService } from './../../services/address.service';
import { Address } from './../../models/address';
import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cartItem';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cities:City[]
  address:Address
  checkoutForm:FormGroup
  cartItems: CartItem[] = [];
  additionalCartItems:AdditionalCartItem[]=[]
  constructor(private formBuilder:FormBuilder,private cityService:CityService,
      private messageService:MessageService,private addressService:AddressService,public cartService: CartService) { }

  ngOnInit(): void {
    this.getCities();
    this.createAddressForm()
  }
  createAddressForm(){
    this.checkoutForm=this.formBuilder.group({
      name:["",Validators.required],
      surname: ["",Validators.required],
      email: ["",Validators.required],
      telephone: ["",Validators.required],
      date: ["",Validators.required],
      cityId: ["",Validators.required],
      address: ["",Validators.required]
    })
  }
  add(){
    if(this.checkoutForm.valid){
      this.cartItems = this.cartService.list();
      this.additionalCartItems = this.cartService.list2();
      this.address=Object.assign({},this.checkoutForm.value,...this.cartItems,...this.additionalCartItems)
    }
    this.addressService.addAddress(this.address).subscribe(data=>{      
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully '+this.address.name+' Added!',
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    })
  }
  getCities(){
    this.cityService.getCities().subscribe(data=>{
      this.cities=data
    })
  }
}
