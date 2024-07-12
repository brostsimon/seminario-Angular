import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarroCompraService {
 
  private _productList: Product[]=[];
  productList: BehaviorSubject <Product[]>=new BehaviorSubject(this._productList);
  constructor() { }

  agregarAlCarro(product:Product){

    let item : Product | undefined=this._productList.find((v1)=>v1.nombre == product.nombre);
    if(!item){
    this._productList.push({... product});
  } else{
    item.cantidad+=product.cantidad;
  }
    console.log(this._productList.length);
    this.productList.next(this._productList);
  }
  
  eliminarDelCarro(product: Product) {
  
    product.stock+=product.cantidad;
    this._productList = this._productList.filter((v1) => v1.nombre !== product.nombre);
    this.productList.next(this._productList);
  }
}
