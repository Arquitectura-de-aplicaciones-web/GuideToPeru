import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { MenuComponent } from './component/cliente/menu/menu.component';

const routes: Routes = [

  {
    path: 'clientes', component: ClienteComponent, children: [
      {
        path: 'new', component: ClienteCreaeditaComponent
      },
      {
        path:'edicion/:id',component: ClienteCreaeditaComponent
      },
      {
        path: 'menu', component: MenuComponent,
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
