import { Component } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Product[] = [];
  displayedColumns: string[] = ['name', 'price', 'quantity', 'total', 'actions'];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  // Calculate total cart price
  getTotal(): number {
    return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Remove item from cart
  removeFromCart(product: Product): void {
    this.productService.removeFromCart(product);
  }
  clearCart(): void {
    this.productService.clearCart();
  }
}
