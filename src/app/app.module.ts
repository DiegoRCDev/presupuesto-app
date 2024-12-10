import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { IngresoService } from './components/ingreso/ingreso.service';
import { EgresoService } from './components/egreso/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
