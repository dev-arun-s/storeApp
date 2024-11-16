import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent
import { ProductService } from './product.service';
import { MatTableModule } from '@angular/material/table';  // Import MatTableModule
import { MatButtonModule } from '@angular/material/button';  // For Material buttons
import { MatPaginatorModule } from '@angular/material/paginator';  // If you want pagination
import { MatSortModule } from '@angular/material/sort';  // For sorting
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    HeaderComponent,
    LoginComponent  // Declare HeaderComponent here
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  // Include AppRoutingModule for routing
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
