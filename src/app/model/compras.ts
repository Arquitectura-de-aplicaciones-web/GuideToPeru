import { Cliente } from "./clientes"
import { Producto } from "./producto"

export class compras {
  idCompra: number = 0
  cantidadCompra: number = 0
  precioCompra: number = 0
  descripcionCompra: string = ""
  fechaCompra: Date = new Date(Date.now())
  clienteCompra: Cliente = new Cliente;
  productoCompra: Producto = new Producto;
}
