import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { AllsurfAboutComponent } from './allsurf-about/allsurf-about.component';
import { AllsurfProductosComponent } from './allsurf-productos/allsurf-productos.component';
import { ProductCarritoComponent } from './product-carrito/product-carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AllsurfAboutComponent,
    AllsurfProductosComponent,
    ProductCarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
