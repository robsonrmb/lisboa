import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent, PrincipalComponent } from './lisboa/componentes';

const routes: Routes = [
  {path: 'site', component: SiteComponent},
  {path: 'principal', component: PrincipalComponent},

  {path: '', redirectTo: '/site', pathMatch: 'full'},
  {path: '**', redirectTo: '/site', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
