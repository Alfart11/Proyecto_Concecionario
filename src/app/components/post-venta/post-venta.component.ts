import { Component, OnInit } from '@angular/core';
import { Cliente_Antiguo } from 'src/app/interfaces/cliente_antiguo';
import { Concesionario } from 'src/app/interfaces/concesionario';
import { Vehiculo_Vendidos } from 'src/app/interfaces/vehiculos_vendidos';


@Component({
  selector: 'app-post-venta',
  templateUrl: './post-venta.component.html',
  styleUrls: ['./post-venta.component.css']
})
export class PostVentaComponent {
  public ListaCliente: Cliente_Antiguo[]= [];
  public ListaVehiculo: Vehiculo_Vendidos[]= [];
  public ListaConcesionario: Concesionario[]= [];

  public clienteAntiguo: Cliente_Antiguo = {
    Nombre: "",
    Apellido: "",
    Email: "",
    Telefono: "",
  }
  public vehiculoVendido: Vehiculo_Vendidos = {
    Placa: "",
    Modelo: "",
  }
  public concesionario: Concesionario = {
    Sede: "",
  }
  EnviarDatos(): void {
    this.ListaCliente.push(this.clienteAntiguo)
    this.ListaVehiculo.push(this.vehiculoVendido)
    this.ListaConcesionario.push(this.concesionario)
    console.log(this.clienteAntiguo)
    console.log(this.vehiculoVendido)
    console.log(this.concesionario)
  }
}
