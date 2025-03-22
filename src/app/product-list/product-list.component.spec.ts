import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { of } from 'rxjs';
import { ProductService } from '../product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceMock: any;

  beforeEach(async () => {
    productServiceMock = {
      getProducts: jest.fn().mockReturnValue(of([]))
    };

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [MatPaginatorModule, MatSortModule],
      providers: [{ provide: ProductService, useValue: productServiceMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProducts on ngOnInit', () => {
    const loadProductsSpy = jest.spyOn(component, 'loadProducts');
    component.ngOnInit();
    expect(loadProductsSpy).toHaveBeenCalled();
  });

  it('should call loadProducts on ngAfterViewInit', () => {
    const loadProductsSpy = jest.spyOn(component, 'loadProducts');
    component.ngAfterViewInit();
    expect(loadProductsSpy).toHaveBeenCalled();
  });

  it('should set isLoading to false after loading products', async () => {
    productServiceMock.getProducts.mockReturnValue(of([]));
    await component.loadProducts();
    expect(component.isLoading).toBe(false);
  });
});