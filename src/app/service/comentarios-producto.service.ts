import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentariosProducto } from '../model/ComentariosProducto';
import {Subject} from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn:'root',
})
export class ComentariosProductoService {
  private url = `${base_url}/comentarioproductos`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <ComentariosProducto[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<ComentariosProducto[]>(this.url);
  }
  insert(comentarioproducto: ComentariosProducto){
    return this.http.post(this.url, comentarioproducto);
  }
  setList(listaNueva:ComentariosProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<ComentariosProducto>(`${this.url}/${id}`);
  }
  update(a:ComentariosProducto){
    return this.http.put(this.url,a);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
