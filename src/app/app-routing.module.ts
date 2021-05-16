import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { MaterialesViewComponent } from './components/materiales/materiales-view/materiales-view.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginScreenComponent } from './components/login/login-screen/login-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SaludosViewComponent } from './components/saludos/saludos-view/saludos-view.component';
import { AmbientesPjViewComponent } from './components/ambientes-pj/ambientes-pj-view/ambientes-pj-view.component';
import { PActosViewComponent } from './components/p-actos/p-actos-view/p-actos-view.component';
import { HistoriaViewComponent } from './components/historia/historia-view/historia-view.component';
import { OracionViewComponent } from './components/oracion/oracion-view/oracion-view.component';
import { VisitasViewComponent } from './components/visitas/visitas-view/visitas-view.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: SidenavComponent, canActivate: [AuthGuardService],
        children: [
          { path: 'usuarios', component: UsersViewComponent },
          { path: 'saludos', component: SaludosViewComponent },
          { path: 'visitas', component: VisitasViewComponent },
          { path: 'actos', component: PActosViewComponent },
          { path: 'ambientes', component: AmbientesPjViewComponent },
          { path: 'historia', component: HistoriaViewComponent },
          { path: 'oracion', component: OracionViewComponent },
          { path: 'materiales', component: MaterialesViewComponent }
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
