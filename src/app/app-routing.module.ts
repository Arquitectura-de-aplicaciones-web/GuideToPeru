import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { MenuComponent } from './component/cliente/menu/menu.component';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';


const routes: Routes = [

  {
    path: 'clientes', component: ClienteComponent, children: [
      {
        path: 'registrarcl', component: ClienteCreaeditaComponent
      },
      {
        path: 'edicion/:id', component: ClienteCreaeditaComponent
      },
      {
        path: 'menu', component: MenuComponent,
      },
      {
        path: 'compras', component: ComprasComponent,
      },
      {
        path: 'registrarcm',component: ComprasCreaeditaComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
