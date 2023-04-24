import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegocioComponent } from './component/negocio/negocio.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';

const routes: Routes = [
  {
    path:'negocio',component:NegocioComponent,children:[
      {
        path:'new',component:NegocioCreaeditaComponent
      },
      {
        path:'edicion/:id',component:NegocioCreaeditaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
