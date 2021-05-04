import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product/product-details.component';
import { ProductListComponent } from './product/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
