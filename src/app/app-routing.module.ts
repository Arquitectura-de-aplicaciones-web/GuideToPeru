import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { MenuComponent } from './component/cliente/menu/menu.component';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { NegocioComponent } from './component/negocio/negocio.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';
import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

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
        path: 'registrarcm', component: ComprasCreaeditaComponent
      },
      {
        path: 'negocio', component: NegocioComponent
      },
      {
        path: 'registrarng', component: NegocioCreaeditaComponent
      },
      {
        path: 'destino', component: DestinoComponent
      },
      {
        path: 'registrardt', component: DestinoCreaeditaComponent
      },
      {
        path: 'usuario', component: UsuarioComponent,
      },
      {
        path: 'registrarus', component: UsuarioCreaeditaComponent,
      },
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
