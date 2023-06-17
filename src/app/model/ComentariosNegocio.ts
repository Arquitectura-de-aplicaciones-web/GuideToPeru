import { Negocio } from "./negocio";
import { Cliente } from "./clientes";

export class ComentariosNegocio {

    idComentarioNegocio: number = 0;
    comentario: String = "";
    calificacion: String = "";
    idNegocio: Negocio = new Negocio;
    idCliente: Cliente = new Cliente;

}
