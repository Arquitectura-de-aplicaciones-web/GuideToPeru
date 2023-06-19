
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./component/pages.module').then((m) => m.PagesModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
