import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'**',
  redirectTo: 'selector',
  loadChildren:()=>import('../app/countries/countries.module').then (m=>m.CountriesModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
