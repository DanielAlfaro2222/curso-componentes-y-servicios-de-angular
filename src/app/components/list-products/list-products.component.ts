import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.models';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: '565',
      image: '../assets/images/toy.webp',
      stock: 10
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: '356',
      image: '../assets/images/bike.webp',
      stock: 10
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: '34',
      image: '../assets/images/album.webp',
      stock: 10
    },
    {
      id: '4',
      name: 'Mis libros',
      price: '23',
      image: '../assets/images/books.webp',
      stock: 10
    },
    {
      id: '4',
      name: 'Casa para perro',
      price: '34',
      image: '../assets/images/house.webp',
      stock: 10
    },
    {
      id: '5',
      name: 'Gafas',
      price: '3434',
      image: '../assets/images/glasses.webp',
      stock: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
