import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/form/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SaludosComponent } from './components/saludos/saludos.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { PActosComponent } from './components/p-actos/p-actos.component';
import { AmbientesPJComponent } from './components/ambientes-pj/ambientes-pj.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { OracionComponent } from './components/oracion/oracion.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { LoginViewComponent } from './components/login/login-view/login-view.component';
import { EditUserComponent } from './components/login/edit-user/edit-user.component';
import { DetailsUserComponent } from './components/login/details-user/details-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    SaludosComponent,
    VisitasComponent,
    PActosComponent,
    AmbientesPJComponent,
    HistoriaComponent,
    OracionComponent,
    MaterialesComponent,
    LoginViewComponent,
    EditUserComponent,
    DetailsUserComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
