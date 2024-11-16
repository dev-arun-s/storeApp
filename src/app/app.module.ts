import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent  // Declare HeaderComponent here
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  // Include AppRoutingModule for routing
    MaterialModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
