import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';
import { DestinoListarComponent } from './component/destino/destino-listar/destino-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table';
import { DestinoDialogoComponent } from './component/destino/destino-listar/destino-dialogo/destino-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    DestinoCreaeditaComponent,
    DestinoListarComponent,
    DestinoDialogoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule ,
    FormsModule,
    MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
