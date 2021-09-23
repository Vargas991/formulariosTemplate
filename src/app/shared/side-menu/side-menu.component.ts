import { Component, OnInit } from '@angular/core';

export interface MenuItem{
  ruta: string;
  texto: string;
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SideMenuComponent  {

  templateMenu: MenuItem[] = [
    { ruta: '/template/basicos',
      texto: 'Basicos'},

    { ruta: '/template/dinamicos',
      texto: 'Dinamicos'},

    { ruta: '/template/switches',
      texto: 'Switches'},
  ];
  
  reactiveMenu: MenuItem[] = [
    { ruta: '/reactive/basicos',
    texto: 'Basicos'},

    { ruta: '/reactive/dinamicos',
      texto: 'Dinamicos'},

    { ruta: '/reactive/switches',
      texto: 'Switches'},
  ];

}
