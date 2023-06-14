import { Negocio } from "./negocio";


export class producto {

    id: number = 0;
    imagen: String = "";
    nombre: String = "";
    descripcion: String = "";
    precio: number = 0;
    visible: boolean = true;
    calificacion: number = 0;
    idnegocio: Negocio = new Negocio;

}