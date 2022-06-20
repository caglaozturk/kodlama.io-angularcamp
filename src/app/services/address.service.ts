import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient:HttpClient) { }
  getAddress():Observable<Address[]>{
    return this.httpClient.get<Address[]>("http://localhost:3000/address")
  }
  deleteAddress(val:number):Observable<Address>{
    return this.httpClient.delete<Address>("http://localhost:3000/address/"+val)
  }

  addAddress(address:Address):Observable<Address>{

    return this.httpClient.post<Address>("http://localhost:3000/address",address)

  }
  updateAddress(address:Address):Observable<Address>{
    return this.httpClient.put<Address>("http://localhost:3000/address/"+address.id,address)
  }
  getAddressById(val:number):Observable<Address>{
    return this.httpClient.get<Address>("http://localhost:3000/address/"+val)
  }
}
