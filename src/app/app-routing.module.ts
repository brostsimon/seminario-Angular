import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsurfProductosComponent } from './allsurf-productos/allsurf-productos.component';
import { AllsurfAboutComponent } from './allsurf-about/allsurf-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: AllsurfProductosComponent
  },
  {
    path: 'about',
    component: AllsurfAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
