import { Negocio } from "./negocio";


export class Producto {

    idproducto: number = 0;
    nombre: String = "";
    descripcion: String = "";
    precio: number = 0;
    visible: boolean = true;
    calificacion: number = 0;
    idnegocio: Negocio = new Negocio;
    cantidad: number = 0;
}