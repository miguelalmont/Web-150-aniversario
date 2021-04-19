import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbientesPJComponent } from './components/ambientes-pj/ambientes-pj.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { PActosComponent } from './components/p-actos/p-actos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { LoginScreenComponent } from './components/login/login-screen/login-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SaludosViewComponent } from './components/saludos/saludos-view/saludos-view.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: SidenavComponent,
        children: [
          { path: 'usuarios', component: UsersViewComponent },
          { path: 'saludos', component: SaludosViewComponent },
          { path: 'visitas', component: VisitasComponent },
          { path: 'actos', component: PActosComponent },
          { path: 'ambientes', component: AmbientesPJComponent },
          { path: 'historia', component: HistoriaComponent },
          { path: 'oracion', component: OracionComponent },
          { path: 'materiales', component: MaterialesComponent }
        ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
