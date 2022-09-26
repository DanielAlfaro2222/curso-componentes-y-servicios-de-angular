import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoEmpresa: string = '../../assets/images/logo_yard_sale.svg';
  visibleMenu: boolean = false;

  constructor() { }

  showOrHideMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

}
