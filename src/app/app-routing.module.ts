import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './lisboa/componentes/principal';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},

  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: '**', redirectTo: '/principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
