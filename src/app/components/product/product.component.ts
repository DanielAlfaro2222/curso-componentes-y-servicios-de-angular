import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() image: string = '';
  @Input() stock: number | string = 10;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  productAvailable: boolean = true;
  textButton: string = "Agregar al carrito";

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.addToCart.emit({
      id: this.id,
      title: this.title,
      price: this.price,
      image: this.image,
      description: this.description,
      stock: this.stock
    });

    this.stock = (this.productAvailable) ? +this.stock - 1 : 0;

    if (this.stock === 0) {
      this.productAvailable = !this.productAvailable;
      this.textButton = "Producto sin stock";
    }
  }
}
