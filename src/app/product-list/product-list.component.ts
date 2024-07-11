import { Component} from '@angular/core';
import {Product} from './Product';
import { CarroCompraService } from '../carro-compra.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  {

  products: Product[] =[{
    "nombre":"tabla",
    "marca":"rip curl",
    "precio":2000,
    "stock":4,
    "image":"assets/img/tabla_ripCurl.jpeg",
    "oferta":false,
    "cantidad":0,
  },{
    "nombre":"pita",
    "marca":"reef",
    "precio":480,
    "stock":2,
    "image":"assets/img/tabla_ripCurl.jpeg",
    "oferta":true,
    "cantidad":0,
  },{
    "nombre":"parafina",
    "marca":"freelife",
    "precio":20,
    "stock":0,
    "image":"assets/img/tabla_ripCurl.jpeg",
    "oferta":false,
    "cantidad":0,
  },
 ];

 constructor(private carro: CarroCompraService){

 }
 agregarAlCarro(product: Product):void{
  this.carro.agregarAlCarro(product);
  product.stock-=product.cantidad;
  product.cantidad=0;
 }

 maxReached(m: string){
  alert(m);
 }
 
}
