import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';

import { ComentariosNegocio } from './model/ComentariosNegocio';
import { ComentariosNegociosCreaeditaComponent } from './component/comentarios-negocios/comentarios-negocios-creaedita/comentarios-negocios-creaedita.component';


import { NegocioComponent } from './component/negocio/negocio.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';

import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';

import { ComentariosProductoComponent } from './component/comentarios-producto/comentarios-producto.component';
import { ComentariosProductoCreaeditaComponent } from './component/comentarios-producto/comentarios-producto-creaedita/comentarios-producto-creaedita.component';

import { ProductoComponent } from './component/producto/producto.component';
import { ProductoCreaeditaComponent } from './component/producto/producto-creaedita/producto-creaedita.component';

import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MenuComponent } from './component/menu/menu.component';
import { ComprasComponent } from './component/compras/compras.component';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { ComentariosNegociosComponent } from './component/comentarios-negocios/comentarios-negocios.component';
import { EtiquetaComponent } from './component/etiqueta/etiqueta.component';
import { EtiquetaCreaditaComponent } from './component/etiqueta/etiqueta-creadita/etiqueta-creadita.component';

import { EtiquetaProductoComponent } from './component/etiqueta-producto/etiqueta-producto.component';
import { EtiquetaProductoCreaeditaComponent } from './component/etiqueta-producto/etiqueta-producto-creaedita/etiqueta-producto-creaedita.component';


const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'clientes', component: ClienteComponent, children: [
    { path: 'registrarcl', component: ClienteCreaeditaComponent },
    { path: 'edicion/:id', component: ClienteCreaeditaComponent }
  ]},
  { path: 'compras', component: ComprasComponent, children: [
    { path: 'registrarcm', component: ComprasCreaeditaComponent },
    { path: 'edicion/:id', component: ComprasCreaeditaComponent }
  ]},
  { path: 'destinos', component: DestinoComponent, children: [
    { path: 'registrardt', component: DestinoCreaeditaComponent },
    { path: 'edicion/:id', component: DestinoCreaeditaComponent }
  ]},
  { path: 'negocios', component: NegocioComponent, children: [
    { path: 'registrarng', component: NegocioCreaeditaComponent },
    { path: 'edicion/:id', component: NegocioCreaeditaComponent }
  ]},
  { path: 'usuarios', component: UsuarioComponent, children: [
    { path: 'registrarus', component: UsuarioCreaeditaComponent },
    { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
  ]},
  { path: 'comentariosproducto', component: ComentariosProductoComponent, children: [
    { path: 'registrarus', component: ComentariosProductoCreaeditaComponent },
    { path: 'edicion/:id', component: ComentariosProductoCreaeditaComponent }
  ]},
  { path: 'productos', component: ProductoComponent, children: [
    { path: 'registrardt', component: ProductoCreaeditaComponent },
    { path: 'edicion/:id', component: ProductoCreaeditaComponent }
  ]},
  { path: 'comentariosnegocios', component: ComentariosNegociosComponent, children: [
    { path: 'registrarus', component: ComentariosNegociosCreaeditaComponent },
    { path: 'edicion/:id', component: ComentariosNegociosCreaeditaComponent }
  ]},
  { path: 'etiqueta', component: EtiquetaComponent, children: [
    { path: 'registrarus', component: EtiquetaCreaditaComponent },
    { path: 'edicion/:id', component: EtiquetaCreaditaComponent }
  ]},
  { path: 'etiquetaProducto', component: EtiquetaProductoComponent, children: [
    { path: 'registrarus', component: EtiquetaProductoCreaeditaComponent },
    { path: 'edicion/:id', component: EtiquetaProductoCreaeditaComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
