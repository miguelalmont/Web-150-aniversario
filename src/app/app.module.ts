import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
<<<<<<< Updated upstream
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HimnoComponent } from './himno/himno.component';
import { SaludosComponent } from './saludos/saludos.component';
import { VisitasComponent } from './visitas/visitas.component';
import { PActosComponent } from './p-actos/p-actos.component';
import { AmbientesPJComponent } from './ambientes-pj/ambientes-pj.component';
import { LogoComponent } from './logo/logo.component';
import { HistoriaComponent } from './historia/historia.component';
import { OracionComponent } from './oracion/oracion.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { GraciasComponent } from './gracias/gracias.component';
=======
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SaludosComponent } from './components/saludos/saludos.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
<<<<<<< Updated upstream
import {MatTableModule} from '@angular/material/table';
>>>>>>> Stashed changes
=======
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { DetailsUserComponent } from './components/users/details-user/details-user.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { LoginScreenComponent } from './components/login/login-screen/login-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SaludosViewComponent } from './components/saludos/saludos-view/saludos-view.component';
import { SaludosFormComponent } from './components/saludos/saludos-form/saludos-form.component';
import { SaludosEditComponent } from './components/saludos/saludos-edit/saludos-edit.component';
import { SaludosDetailsComponent } from './components/saludos/saludos-details/saludos-details.component';
import { PActosDetailsComponent } from './components/p-actos/p-actos-details/p-actos-details.component';
import { PActosEditComponent } from './components/p-actos/p-actos-edit/p-actos-edit.component';
import { PActosFormComponent } from './components/p-actos/p-actos-form/p-actos-form.component';
import { PActosViewComponent } from './components/p-actos/p-actos-view/p-actos-view.component';
import { AmbientesPjDetailsComponent } from './components/ambientes-pj/ambientes-pj-details/ambientes-pj-details.component';
import { AmbientesPjEditComponent } from './components/ambientes-pj/ambientes-pj-edit/ambientes-pj-edit.component';
import { AmbientesPjFormComponent } from './components/ambientes-pj/ambientes-pj-form/ambientes-pj-form.component';
import { AmbientesPjViewComponent } from './components/ambientes-pj/ambientes-pj-view/ambientes-pj-view.component';
import { HistoriaDetailsComponent } from './components/historia/historia-details/historia-details.component';
import { HistoriaEditComponent } from './components/historia/historia-edit/historia-edit.component';
import { HistoriaFormComponent } from './components/historia/historia-form/historia-form.component';
import { HistoriaViewComponent } from './components/historia/historia-view/historia-view.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    SidenavComponent,
    HimnoComponent,
    SaludosComponent,
    VisitasComponent,
<<<<<<< Updated upstream
    PActosComponent,
    AmbientesPJComponent,
    LogoComponent,
    HistoriaComponent,
    OracionComponent,
    MaterialesComponent,
    GraciasComponent
=======
    HistoriaComponent,
    OracionComponent,
    MaterialesComponent,
    UsersViewComponent,
    LoginScreenComponent,
    PageNotFoundComponent,
    EditUserComponent,
    DetailsUserComponent,
    SaludosViewComponent,
    SaludosFormComponent,
    SaludosEditComponent,
    SaludosDetailsComponent,
    PActosDetailsComponent,
    PActosEditComponent,
    PActosFormComponent,
    PActosViewComponent,
    AmbientesPjDetailsComponent,
    AmbientesPjEditComponent,
    AmbientesPjFormComponent,
    AmbientesPjViewComponent,
    HistoriaDetailsComponent,
    HistoriaEditComponent,
    HistoriaFormComponent,
    HistoriaViewComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
