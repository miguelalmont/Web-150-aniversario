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

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    SidenavComponent,
    HimnoComponent,
    SaludosComponent,
    VisitasComponent,
    PActosComponent,
    AmbientesPJComponent,
    LogoComponent,
    HistoriaComponent,
    OracionComponent,
    MaterialesComponent,
    GraciasComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
