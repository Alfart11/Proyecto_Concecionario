import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { Registro_autoComponent } from './components/registro_auto/registro_auto.component';
import { Registro_repuestoComponent } from './components/registro_repuesto/registro_repuesto.component';
import { Registro_accesorioComponent } from './components/registro_accesorio/registro_accesorio.component';


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
    RegistroComponent,
    Registro_autoComponent,
    Registro_repuestoComponent,
    Registro_accesorioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
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
