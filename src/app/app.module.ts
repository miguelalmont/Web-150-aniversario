import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users-form/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { VisitasComponent } from './components/visitas/visitas.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { DetailsUserComponent } from './components/users/details-user/details-user.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { LoginScreenComponent } from './components/login/login-screen/login-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SaludosViewComponent } from './components/saludos/saludos-view/saludos-view.component';
import { SaludosFormComponent } from './components/saludos/saludos-form/saludos-form.component';
import { SaludosEditComponent } from './components/saludos/saludos-edit/saludos-edit.component';
import { SaludosDetailsComponent } from './components/saludos/saludos-details/saludos-details.component';
import { AmbientesPjDetailsComponent } from './components/ambientes-pj/ambientes-pj-details/ambientes-pj-details.component';
import { AmbientesPjEditComponent } from './components/ambientes-pj/ambientes-pj-edit/ambientes-pj-edit.component';
import { AmbientesPjFormComponent } from './components/ambientes-pj/ambientes-pj-form/ambientes-pj-form.component';
import { AmbientesPjViewComponent } from './components/ambientes-pj/ambientes-pj-view/ambientes-pj-view.component';
import { PActosDetailsComponent } from './components/p-actos/p-actos-details/p-actos-details.component';
import { PActosFormComponent } from './components/p-actos/p-actos-form/p-actos-form.component';
import { PActosEditComponent } from './components/p-actos/p-actos-edit/p-actos-edit.component';
import { PActosViewComponent } from './components/p-actos/p-actos-view/p-actos-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    SidenavComponent,
    SaludosViewComponent,
    VisitasComponent,
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
    AmbientesPjDetailsComponent,
    AmbientesPjEditComponent,
    AmbientesPjFormComponent,
    AmbientesPjViewComponent,
    PActosDetailsComponent,
    PActosFormComponent,
    PActosEditComponent,
    PActosViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
