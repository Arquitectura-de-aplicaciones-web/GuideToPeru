import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';

const routes: Routes = [
  {
    path: 'destinos', component: DestinoComponent, children: [
      { path: 'nuevo', component: DestinoCreaeditaComponent },
      { path: 'edicion/:id', component: DestinoCreaeditaComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
