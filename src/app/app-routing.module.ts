import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';

const routes: Routes = [
{
  path:'compras', component:ComprasComponent,children:[
    {
      path:'new', component: ComprasCreaeditaComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
