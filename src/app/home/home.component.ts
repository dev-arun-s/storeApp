import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  testimonials = [
    { name: 'John Doe', message: 'Great service and amazing products! Highly recommended.' },
    { name: 'Jane Smith', message: 'I found everything I needed, and the prices are fantastic.' },
    { name: 'Mark Lee', message: 'Fast delivery and great customer support. Will shop again!' }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(): void {
    // Assuming `ProductService` has a method `getFeaturedProducts` to fetch featured products
    this.productService.getFeaturedProducts().subscribe((products) => {
      this.featuredProducts = products;
    });
  }
}
