import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookdisplayComponent } from './Components/bookdisplay/bookdisplay.component';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { RegisterComponent } from './Pages/register/register.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'addbook', component: AddbookComponent},
  {path: 'wishlist', component: WishlistComponent},
  
  {path:'orders', component: OrdersComponent},
   {path: 'bookdetails', component: BookDetailsComponent},
   {path: 'cart', component: CartComponent},
  { path: 'dashboard', component:DashboardComponent,
    children: [
     
     {path: 'cart', component: CartComponent},
     {path:'orders', component: OrdersComponent},
     {path: 'wishlist', component: WishlistComponent},
     {path: 'bookdisplay', component: BookdisplayComponent},
     {path: 'bookdetails', component: BookDetailsComponent},
     {path: 'orderplaced', component: OrderPlacedComponent},
     {path: 'bookdisplay', component: BookdisplayComponent}
      
    ]

},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
