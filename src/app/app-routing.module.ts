import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

const routes: Routes = [
  { path: "usuarios", component:UsuarioComponent, children: [
    { path: "listar", component: UsuarioListarComponent },
    { path: "editar", component: UsuarioCreaeditaComponent, children: [
      { path: ":id", component: UsuarioCreaeditaComponent }
    ]}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
