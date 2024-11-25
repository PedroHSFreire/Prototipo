import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { NgModule } from '@angular/core';
import { QueimadasComponent } from './pages/queimadas/queimadas.component';
import { QualidadeDoArComponent } from './pages/qualidade-do-ar/qualidade-do-ar.component';
import { DeslizamentoComponent } from './pages/deslizamento/deslizamento.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'queimadas',
    component: QueimadasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'QualidadeDoAr',
    component: QualidadeDoArComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Deslizamento',
    component: DeslizamentoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
