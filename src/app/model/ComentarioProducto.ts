import { Cliente } from "./clientes";
import { Producto } from "./producto";


export class ComentarioNegocio{

    idComentarioNegocio:number=0;
    comentario: String="";
    calificacion: String = "";
    producto: Producto=new Producto;
    cliente: Cliente = new Cliente;

}
