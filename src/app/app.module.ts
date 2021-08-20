import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatRadioModule} from '@angular/material/radio';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { RegisterComponent } from './Pages/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { CartComponent } from './Components/cart/cart.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { BookdisplayComponent } from './Components/bookdisplay/bookdisplay.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AddbookComponent,
    DashboardComponent,
    BookDetailsComponent,
    CartComponent,
    BookdisplayComponent,
    OrdersComponent,
    WishlistComponent,
    OrderPlacedComponent,
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,  
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
