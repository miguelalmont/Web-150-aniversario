import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { AmbientesPJComponent } from './ambientes-pj/ambientes-pj.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GraciasComponent } from './gracias/gracias.component';
import { HimnoComponent } from './himno/himno.component';
import { HistoriaComponent } from './historia/historia.component';
import { LogoComponent } from './logo/logo.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { OracionComponent } from './oracion/oracion.component';
import { PActosComponent } from './p-actos/p-actos.component';
import { SaludosComponent } from './saludos/saludos.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VisitasComponent } from './visitas/visitas.component';
=======
import { AmbientesPjViewComponent } from './components/ambientes-pj/ambientes-pj-view/ambientes-pj-view.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { HistoriaViewComponent } from './components/historia/historia-view/historia-view.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { PActosViewComponent } from './components/p-actos/p-actos-view/p-actos-view.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { LoginScreenComponent } from './components/login/login-screen/login-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SaludosViewComponent } from './components/saludos/saludos-view/saludos-view.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'home', component: SidenavComponent,
<<<<<<< Updated upstream
    children: [
      { path: 'registro', component: FormularioComponent },
      { path: 'himno', component: HimnoComponent },
      { path: 'saludos', component: SaludosComponent },
      { path: 'visitas', component: VisitasComponent },
      { path: 'actos', component: PActosComponent },
      { path: 'ambientes', component: AmbientesPJComponent },
      { path: 'logo', component: LogoComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'oracion', component: OracionComponent },
      { path: 'himno', component: HimnoComponent },
      { path: 'materiales', component: MaterialesComponent },
      { path: 'gracias', component: GraciasComponent }
    ]
=======
        children: [
          { path: 'usuarios', component: UsersViewComponent },
          { path: 'saludos', component: SaludosViewComponent },
          { path: 'visitas', component: VisitasComponent },
          { path: 'actos', component: PActosViewComponent },
          { path: 'ambientes', component: AmbientesPjViewComponent },
          { path: 'historia', component: HistoriaViewComponent },
          { path: 'oracion', component: OracionComponent },
          { path: 'materiales', component: MaterialesComponent }
        ]
>>>>>>> Stashed changes
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
