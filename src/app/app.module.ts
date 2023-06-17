import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './component/cliente/cliente.component';
import { ComprasComponent } from './component/compras/compras.component';
import { NegocioComponent } from './component/negocio/negocio.component';
import { DestinoComponent } from './component/destino/destino.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { ComprasListarComponent } from './component/compras/compras-listar/compras-listar.component';
import { NegocioListarComponent } from './component/negocio/negocio-listar/negocio-listar.component';
import { DestinoListarComponent } from './component/destino/destino-listar/destino-listar.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';

import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

import { ClienteDialogoComponent } from './component/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ComprasDialogoComponent } from './component/compras/compras-listar/compras-dialogo/compras-dialogo.component';
import { NegocioDialogoComponent } from './component/negocio/negocio-listar/negocio-dialogo/negocio-dialogo.component';
import { DestinoDialogoComponent } from './component/destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { UsuarioDialogoComponent } from './component/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './component/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

import { ComentariosProductoComponent } from './component/comentarios-producto/comentarios-producto.component';
import { ComentariosProductoCreaeditaComponent } from './component/comentarios-producto/comentarios-producto-creaedita/comentarios-producto-creaedita.component';
import { ComentariosProductoListarComponent } from './component/comentarios-producto/comentarios-producto-listar/comentarios-producto-listar.component';
import { ComentariosProductoDialogoComponent } from './component/comentarios-producto/comentarios-producto-listar/comentarios-producto-dialogo/comentarios-producto-dialogo.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductoCreaeditaComponent } from './component/producto/producto-creaedita/producto-creaedita.component';
import { ProductoListarComponent } from './component/producto/producto-listar/producto-listar.component';
import { ProductoDialogoComponent } from './component/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { ComentariosNegociosComponent } from './component/comentarios-negocios/comentarios-negocios.component';
import { ComentariosNegociosCreaeditaComponent } from './component/comentarios-negocios/comentarios-negocios-creaedita/comentarios-negocios-creaedita.component';
import { ComentariosNegociosListarComponent } from './component/comentarios-negocios/comentarios-negocios-listar/comentarios-negocios-listar.component';
import { ComentariosNegociosDialogoComponent } from './component/comentarios-negocios/comentarios-negocios-listar/comentarios-negocios-dialogo/comentarios-negocios-dialogo.component';
import { EtiquetaComponent } from './component/etiqueta/etiqueta.component';
import { EtiquetaCreaditaComponent } from './component/etiqueta/etiqueta-creadita/etiqueta-creadita.component';
import { EtiquetaListarComponent } from './component/etiqueta/etiqueta-listar/etiqueta-listar.component';
import { EtiquetaDialogoComponent } from './component/etiqueta/etiqueta-listar/etiqueta-dialogo/etiqueta-dialogo.component';
import { EtiquetaProductoComponent } from './component/etiqueta-producto/etiqueta-producto.component';
import { EtiquetaProductoCreaeditaComponent } from './component/etiqueta-producto/etiqueta-producto-creaedita/etiqueta-producto-creaedita.component';
import { EtiquetaProductoListarComponent } from './component/etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-listar.component';
import { EtiquetaProductoDialogoComponent } from './component/etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-dialogo/etiqueta-producto-dialogo.component';



@NgModule({
  declarations: [
    AppComponent,
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
    EtiquetaProductoDialogoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
