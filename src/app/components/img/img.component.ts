import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges {
  img: string = "https://www.w3schools.com/howto/img_avatar.png";
  @Output() datos: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Ocurrio un cambio', changes);
    // codigo
  }

  enviarDatos() {
    this.datos.emit('Hola mundo');
  }

  @Input('img')
  set changeImg(value: string) {
    this.img = value;
    console.log('Ocurrio un cambio en el @Input del campo img');
    // codigo
  }
}
