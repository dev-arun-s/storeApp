import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'price', 'actions'];
  totalProducts: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    // Ensure paginator and sort are initialized before using them
    this.loadProducts();
  }

  // Method to load products from the service and apply pagination and sorting
  async loadProducts(): Promise<void> {
    this.productService.getAllProducts().subscribe(products => {
      this.totalProducts = products.length;
      this.products = products.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
      this.isLoading = false;
    });
  }

  // Handle the page change event from paginator
  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  // Add product to the cart
  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }
}
