import { Component } from '@angular/core';
import { CarroCompraService } from '../carro-compra.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-product-carrito',
  templateUrl: './product-carrito.component.html',
  styleUrl: './product-carrito.component.scss'
})
export class ProductCarritoComponent {
  productList: Product[]=[];
  constructor(private carro: CarroCompraService){
    carro.productList.subscribe(pl=>this.productList=pl)
  }
}
