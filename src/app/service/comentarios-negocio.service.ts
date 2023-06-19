import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentariosNegocio } from '../model/ComentariosNegocio';
import {Subject} from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComentariosNegocioService {
  private url=`${base_url}/comentariosnegocios`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <ComentariosNegocio[]>();

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<ComentariosNegocio[]>(this.url);
  }
  insert(comentariosnegocio: ComentariosNegocio) {
    return this.http.post(this.url, comentariosnegocio);
  }
  setList(listaNueva:ComentariosNegocio[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<ComentariosNegocio>(`${this.url}/${id}`);
  }
  update(a:ComentariosNegocio){
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
