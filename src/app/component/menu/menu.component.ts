import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  list_tables = ["usuarios", "negocios", "clientes"]
  list_links  = ["usuarios", "negocios", "clientes"]
  
  constructor(){
    this.list_links.length;
    
  }
}
