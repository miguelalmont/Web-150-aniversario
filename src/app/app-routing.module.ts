import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'home', component: SidenavComponent,
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
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
