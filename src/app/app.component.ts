import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-componentes';
  imgParent: string = '';

  recibirDatos(dato: string) {
    alert(dato);
  }
}
