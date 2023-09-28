import { Component } from '@angular/core';
import * as AOS from 'aos'

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_portifolio';
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit(){
    AOS.init()
    window.addEventListener('load',AOS.refresh)


    this.items = [
      { label: 'Início', icon: 'pi pi-fw pi-home' },
      { label: 'Sobre mim', icon: 'pi pi-fw pi-calendar' },
      { label: 'Projetos', icon: 'pi pi-fw pi-pencil' },
      { label: 'Habilidades', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  ];

  this.activeItem = this.items[0];
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}

activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
}

}







