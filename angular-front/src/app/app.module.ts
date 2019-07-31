import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ListaComponent } from './lista/lista.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const appRoutes: Routes = [
  {path: "", component: AppComponent},
  {path: "acerca", component: AcercaComponent},
  {path: "lista", component: ListaComponent},
  {path: "mostrar", component: MostrarComponent},
  {path: "registrar", component: RegistrarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ListaComponent,
    MostrarComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
