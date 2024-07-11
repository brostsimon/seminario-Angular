import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
    
  @Input() cantidad:number=0;
  @Input() max:number=0;

  @Output()
  cantidadChange: EventEmitter<number>= new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string>= new EventEmitter<string>();

  decrementarCantidad():void{
    if(this.cantidad > 0){
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
    
   }
   incrementarCantidad():void{
    if(this.cantidad < this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }
    else this.maxReached.emit('se alcanzo el maximo');
   }
  
   cambioCantidad( event: Event):void{
    console.log(event.target);
    this.cantidadChange.emit(this.cantidad);
    
   }
}
 