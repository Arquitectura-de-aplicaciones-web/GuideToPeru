import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { MatInputModule } from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './component/cliente/menu/menu.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {CdkTreeModule} from '@angular/cdk/tree'

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    MenuComponent
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
    MatTreeModule,
   MatIconModule,
   CdkTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
