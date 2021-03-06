import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>("http://localhost:3000/brands")
  }
  deleteBrandd(val:number):Observable<Brand>{
    return this.httpClient.delete<Brand>("http://localhost:3000/brands/"+val)
  }

  addBrands(car:Brand):Observable<Brand>{

    return this.httpClient.post<Brand>("http://localhost:3000/brands",car)

  }
  updateBrand(brand:Brand):Observable<Brand>{
    return this.httpClient.put<Brand>("http://localhost:3000/brands/"+brand.id,brand)
  }
  getBrandById(val:number):Observable<Brand>{
    return this.httpClient.get<Brand>("http://localhost:3000/brands/"+val)
  }
}
