import { Usuario } from "./usuario"


export class Negocio {
  id: number = 0
  nameNegocio: string = ''
  direccionNegocio: string = ''
  tiponegocio: String = ''
  idusuario: Usuario = new Usuario
  calificacion: number = 0
}
