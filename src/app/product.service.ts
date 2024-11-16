import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

// Define a simple Product interface
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 100, quantity: 1, category: 'Category 1', inStock: true },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 150, quantity: 1, category: 'Category 2', inStock: false },
    { id: 3, name: 'Product 3', description: 'Description of product 3', price: 200, quantity: 1, category: 'Category 3', inStock: true },
    { id: 4, name: 'Product 4', description: 'Description of product 4', price: 250, quantity: 1, category: 'Category 4', inStock: true },
    { id: 5, name: 'Product 5', description: 'Description of product 5', price: 300, quantity: 1, category: 'Category 5', inStock: true },
    { id: 6, name: 'Product 6', description: 'Description of product 6', price: 350, quantity: 1, category: 'Category 6', inStock: false }
  ];

  private cart: Product[] = [];

  // Observable to track changes in the cart
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product>  {
    const product = this.products.find(product => product.id === id);
    return of(product!);
  }

  addToCart(product: Product): void {
   /*  this.cart.push(product);
    this.cartSubject.next(this.cart); */
    const currentCart = this.cartSubject.value;
    const existingProduct = currentCart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      currentCart.push({ ...product });
    }
    this.cartSubject.next(currentCart);
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  // Remove a product from the cart
  removeFromCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(p => p.id !== product.id);
    this.cartSubject.next(updatedCart);
  }

   // Fetch featured products (Example - adjust according to your backend API)
   getFeaturedProducts(): Observable<Product[]> {
    const featuredProducts = this.products.filter(x=>x.inStock);
    return of(featuredProducts!);
  }
}
