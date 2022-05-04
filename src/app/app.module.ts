import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CotizacionComponent } from './components//cotizacion/cotizacion.component';
import { ModelosComponent } from './components//modelos/modelos.component';
import { PostVentaComponent } from './components//post-venta/post-venta.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { Servicio01Service } from './servicios/servicios01.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionComponent,
    ModelosComponent,
    PostVentaComponent,
    RepuestosComponent,
    AccesoriosComponent,
    OfertasComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent,
    LoginComponent,
    CotizacionComponent,
    RegistroComponent
  ],
  providers: [Servicio01Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
