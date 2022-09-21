import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.models';
import { StoreService } from 'src/app/services/cart/store.service';
import { RequestProductsService } from 'src/app/services/request-products/request-products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  // Inyectando el servicio store al componente
  constructor(private storeService: StoreService, private requestProductsService: RequestProductsService) { }

  ngOnInit(): void {
    this.requestProductsService.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  get shoppingCart(): Product[] {
    return this.storeService.shoppingCart;
  }

  get total(): number {
    return this.storeService.total;
  }

  recibedProduct(product: Product): void {
    this.storeService.addProductToShoppingCart(product);
  }
}
