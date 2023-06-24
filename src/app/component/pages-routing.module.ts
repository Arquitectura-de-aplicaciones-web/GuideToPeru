import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteCreaeditaComponent } from './cliente/cliente-creaedita/cliente-creaedita.component';

import { ComentariosNegociosCreaeditaComponent } from './comentarios-negocios/comentarios-negocios-creaedita/comentarios-negocios-creaedita.component';


import { NegocioComponent } from './negocio/negocio.component';
import { NegocioCreaeditaComponent } from './negocio/negocio-creaedita/negocio-creaedita.component';

import { DestinoComponent } from './destino/destino.component';
import { DestinoCreaeditaComponent } from './destino/destino-creaedita/destino-creaedita.component';

import { ComentariosProductoComponent } from './comentarios-producto/comentarios-producto.component';
import { ComentariosProductoCreaeditaComponent } from './comentarios-producto/comentarios-producto-creaedita/comentarios-producto-creaedita.component';

import { ProductoComponent } from './producto/producto.component';
import { ProductoCreaeditaComponent } from './producto/producto-creaedita/producto-creaedita.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { ComprasComponent } from './compras/ComprasComponent';
import { ComprasCreaeditaComponent } from './compras/compras-creaedita/compras-creaedita.component';
import { ComentariosNegociosComponent } from './comentarios-negocios/comentarios-negocios.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { EtiquetaCreaditaComponent } from './etiqueta/etiqueta-creadita/etiqueta-creadita.component';

import { EtiquetaProductoComponent } from './etiqueta-producto/etiqueta-producto.component';
import { EtiquetaProductoCreaeditaComponent } from './etiqueta-producto/etiqueta-producto-creaedita/etiqueta-producto-creaedita.component';

import { GuardService } from '../service/guard.service';

import { ReportesComponent } from './reportes/reportes.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes2/reporte2/reporte2.component';
import { Reportes2Component } from './reportes2/reportes2.component';
import { Reportes3Component } from './reportes3/reportes3.component';
import { Reporte3Component } from './reportes3/reporte3/reporte3.component';

const routes: Routes = [

  {
    path: 'clientes', component: ClienteComponent, children: [
      { path: 'registrarcl', component: ClienteCreaeditaComponent },
      { path: 'edicion/:id', component: ClienteCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'compras', component: ComprasComponent, children: [
      { path: 'registrarcm', component: ComprasCreaeditaComponent },
      { path: 'edicion/:id', component: ComprasCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'destinos', component: DestinoComponent, children: [
      { path: 'registrardt', component: DestinoCreaeditaComponent },
      { path: 'edicion/:id', component: DestinoCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'negocios', component: NegocioComponent, children: [
      { path: 'registrarng', component: NegocioCreaeditaComponent },
      { path: 'edicion/:id', component: NegocioCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: 'registrarus', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'comentariosproducto', component: ComentariosProductoComponent, children: [
      { path: 'registrarus', component: ComentariosProductoCreaeditaComponent },
      { path: 'edicion/:id', component: ComentariosProductoCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'productos', component: ProductoComponent, children: [
      { path: 'registrardt', component: ProductoCreaeditaComponent },
      { path: 'edicion/:id', component: ProductoCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'comentario_negocio', component: ComentariosNegociosComponent, children: [
      { path: 'registrarus', component: ComentariosNegociosCreaeditaComponent },
      { path: 'edicion/:id', component: ComentariosNegociosCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'etiqueta', component: EtiquetaComponent, children: [
      { path: 'registrarus', component: EtiquetaCreaditaComponent },
      { path: 'edicion/:id', component: EtiquetaCreaditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'etiquetaProducto', component: EtiquetaProductoComponent, children: [
      { path: 'registrarus', component: EtiquetaProductoCreaeditaComponent },
      { path: 'edicion/:id', component: EtiquetaProductoCreaeditaComponent }
    ], canActivate: [GuardService]
  },
  {
    path: 'reportes', component: ReportesComponent, children: [
      { path: 'reporte1', component: Reporte1Component }
    ], canActivate: [GuardService]
  },
  {
  path: 'reportes2', component: Reportes2Component, children: [
    { path: 'reporte2', component: Reporte2Component }
  ], canActivate: [GuardService]
},
{
  path: 'reportes3', component: Reportes3Component, children: [
    { path: 'reporte3', component: Reporte3Component }
  ], canActivate: [GuardService]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
