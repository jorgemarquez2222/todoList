import { AfterViewInit, Component, input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JsonparsePipe } from '../../pipes/jsonparse.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    JsonparsePipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {

  products$ = new Observable<Product[]>();
  productsClone: Product[] = []

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.products$ = this.productService.products;
    this.products$.subscribe((products: Product[]) => {
      this.productsClone = products
    })
  }

  filtrar(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.toLowerCase();
    this.products$ = new BehaviorSubject<Product[]>(
      this.productsClone.filter((product: Product) =>
      product.title.toLowerCase().includes(filterValue)
    ))
  }
}
