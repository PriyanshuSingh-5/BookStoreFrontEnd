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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AddbookComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
   
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
    
    MatButtonToggleModule,
    
    MatToolbarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
