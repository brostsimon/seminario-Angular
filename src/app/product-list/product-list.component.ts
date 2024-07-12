import { Component} from '@angular/core';
import {Product} from './Product';
import { CarroCompraService } from '../carro-compra.service';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  {

  products: Product[] =[];

 constructor(private carro: CarroCompraService,
    private productDataService: ProductDataService
 ){}

 ngOnInit(): void {
  this.productDataService.getAll()
  .subscribe(products => this.products=products);
  
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
