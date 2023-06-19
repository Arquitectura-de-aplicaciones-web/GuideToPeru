import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private url = `${base_url}/usuarios`
  private listaCambio = new Subject<Usuario[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  
  constructor(private http:HttpClient) {}
  
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(cliente:Usuario) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cliente, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva:Usuario[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listID(id:number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Usuario>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(a:Usuario) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,a, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  

  }

  delete(id:number) {
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