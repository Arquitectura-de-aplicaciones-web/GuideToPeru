import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { ComprasListarComponent } from './component/compras/compras-listar/compras-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './component/cliente/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteDialogoComponent } from './component/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ComprasDialogoComponent } from './component/compras/compras-listar/compras-dialogo/compras-dialogo.component';
import { MatSidenavModule } from '@angular/material/sidenav';


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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
