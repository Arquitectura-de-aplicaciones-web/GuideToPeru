import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente/cliente.component';
import { ComprasComponent } from './compras/ComprasComponent';
import { NegocioComponent } from './negocio/negocio.component';
import { DestinoComponent } from './destino/destino.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ComprasListarComponent } from './compras/compras-listar/compras-listar.component';
import { NegocioListarComponent } from './negocio/negocio-listar/negocio-listar.component';
import { DestinoListarComponent } from './destino/destino-listar/destino-listar.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';

import { ClienteCreaeditaComponent } from './cliente/cliente-creaedita/cliente-creaedita.component';
import { ComprasCreaeditaComponent } from './compras/compras-creaedita/compras-creaedita.component';
import { NegocioCreaeditaComponent } from './negocio/negocio-creaedita/negocio-creaedita.component';
import { DestinoCreaeditaComponent } from './destino/destino-creaedita/destino-creaedita.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';

import { ClienteDialogoComponent } from './cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ComprasDialogoComponent } from './compras/compras-listar/compras-dialogo/compras-dialogo.component';
import { NegocioDialogoComponent } from './negocio/negocio-listar/negocio-dialogo/negocio-dialogo.component';
import { DestinoDialogoComponent } from './destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { UsuarioDialogoComponent } from './usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ComentariosProductoComponent } from './comentarios-producto/comentarios-producto.component';
import { ComentariosProductoCreaeditaComponent } from './comentarios-producto/comentarios-producto-creaedita/comentarios-producto-creaedita.component';
import { ComentariosProductoListarComponent } from './comentarios-producto/comentarios-producto-listar/comentarios-producto-listar.component';
import { ComentariosProductoDialogoComponent } from './comentarios-producto/comentarios-producto-listar/comentarios-producto-dialogo/comentarios-producto-dialogo.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoCreaeditaComponent } from './producto/producto-creaedita/producto-creaedita.component';
import { ProductoListarComponent } from './producto/producto-listar/producto-listar.component';
import { ProductoDialogoComponent } from './producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { ComentariosNegociosComponent } from './comentarios-negocios/comentarios-negocios.component';
import { ComentariosNegociosCreaeditaComponent } from './comentarios-negocios/comentarios-negocios-creaedita/comentarios-negocios-creaedita.component';
import { ComentariosNegociosListarComponent } from './comentarios-negocios/comentarios-negocios-listar/comentarios-negocios-listar.component';
import { ComentariosNegociosDialogoComponent } from './comentarios-negocios/comentarios-negocios-listar/comentarios-negocios-dialogo/comentarios-negocios-dialogo.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { EtiquetaCreaditaComponent } from './etiqueta/etiqueta-creadita/etiqueta-creadita.component';
import { EtiquetaListarComponent } from './etiqueta/etiqueta-listar/etiqueta-listar.component';
import { EtiquetaDialogoComponent } from './etiqueta/etiqueta-listar/etiqueta-dialogo/etiqueta-dialogo.component';
import { EtiquetaProductoComponent } from './etiqueta-producto/etiqueta-producto.component';
import { EtiquetaProductoCreaeditaComponent } from './etiqueta-producto/etiqueta-producto-creaedita/etiqueta-producto-creaedita.component';
import { EtiquetaProductoListarComponent } from './etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-listar.component';
import { EtiquetaProductoDialogoComponent } from './etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-dialogo/etiqueta-producto-dialogo.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    MenuComponent,
    ClienteDialogoComponent,

    ComprasComponent,
    ComprasListarComponent,
    ComprasCreaeditaComponent,
    ComprasDialogoComponent,

    NegocioComponent,
    NegocioListarComponent,
    NegocioCreaeditaComponent,
    NegocioDialogoComponent,

    DestinoComponent,
    DestinoListarComponent,
    DestinoCreaeditaComponent,
    DestinoDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    LandingPageComponent,
    ComentariosProductoComponent,
    ComentariosProductoCreaeditaComponent,
    ComentariosProductoListarComponent,
    ComentariosProductoDialogoComponent,
    ProductoComponent,
    ProductoCreaeditaComponent,
    ProductoListarComponent,
    ProductoDialogoComponent,
    ComentariosNegociosComponent,
    ComentariosNegociosCreaeditaComponent,
    ComentariosNegociosListarComponent,
    ComentariosNegociosDialogoComponent,
    EtiquetaComponent,
    EtiquetaCreaditaComponent,
    EtiquetaListarComponent,
    EtiquetaDialogoComponent,
    EtiquetaProductoComponent,
    EtiquetaProductoCreaeditaComponent,
    EtiquetaProductoListarComponent,
    EtiquetaProductoDialogoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    PagesRoutingModule
  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
