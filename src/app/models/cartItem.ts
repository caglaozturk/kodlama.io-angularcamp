import { Car } from 'src/app/models/cars';

export class CartItem{
    car:Car;
    quantity:number;
    total:number=0;
}