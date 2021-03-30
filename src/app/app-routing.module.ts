import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HimnoComponent } from './himno/himno.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: 'home', component: SidenavComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'himno', component: HimnoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
