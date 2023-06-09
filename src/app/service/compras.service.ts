import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { compras } from '../model/compras';
import { Subject,Observable } from 'rxjs';
import { qCompraProducto } from '../model/qCompraProducto';
import { qCompraCliente } from '../model/qCompraCliente';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private url = `${base_url}/compra`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<compras[]>();

  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<compras[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(compras: compras) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, compras, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: compras[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<compras>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(c: compras) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,c, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:boolean){
    this.confirmarEliminacion.next(estado);
  }



  //querry
  getcompraproducto(): Observable<qCompraProducto[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<qCompraProducto[]>(`${this.url}/producto-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }



  getcompracliente(): Observable<qCompraCliente[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<qCompraCliente[]>(`${this.url}/cliente-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

}
