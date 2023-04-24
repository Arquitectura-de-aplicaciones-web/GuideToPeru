import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NegocioComponent } from './component/negocio/negocio.component';
import { NegocioListarComponent } from './component/negocio/negocio-listar/negocio-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    NegocioComponent,
    NegocioListarComponent,
    NegocioCreaeditaComponent,
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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
