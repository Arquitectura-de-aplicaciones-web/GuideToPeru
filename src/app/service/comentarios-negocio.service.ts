import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentarioNegocio } from '../model/comentariosNegocio';
import {Subject} from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComentariosNegocioService {
  private url=`${base_url}/comentariosnegocios`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <ComentarioNegocio[]>();

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<ComentarioNegocio[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(comentariosnegocio: ComentarioNegocio) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, comentariosnegocio, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva:ComentarioNegocio[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<ComentarioNegocio>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(a:ComentarioNegocio){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,a, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
