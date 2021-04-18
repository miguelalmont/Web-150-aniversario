import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbientesPJComponent } from './components/ambientes-pj/ambientes-pj.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { PActosComponent } from './components/p-actos/p-actos.component';
import { SaludosComponent } from './components/saludos/saludos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VisitasComponent } from './components/visitas/visitas.component';

const routes: Routes = [
  { path: 'home', component: SidenavComponent,
    children: [
      { path: 'registro', component: UsersViewComponent },
      { path: 'saludos', component: SaludosComponent },
      { path: 'visitas', component: VisitasComponent },
      { path: 'actos', component: PActosComponent },
      { path: 'ambientes', component: AmbientesPJComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'oracion', component: OracionComponent },
      { path: 'materiales', component: MaterialesComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
