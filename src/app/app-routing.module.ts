import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { LoginComponent } from './components/login/login.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { PostVentaComponent } from './components/post-venta/post-venta.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

const routes: Routes =[
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'cotizacion', component: CotizacionComponent},
  {path:'modelos', component: ModelosComponent},
  {path:'postventa', component: PostVentaComponent},
  {path:'repuestos', component: RepuestosComponent},
  {path:'accesorios', component: AccesoriosComponent},
  {path:'ofertas', component: OfertasComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
