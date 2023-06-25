import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
import { Subject,Observable } from 'rxjs';
import { ProductoComentario } from '../model/ProductoComentario';
import { qProductocalificados } from '../model/qProductocalificado';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${base_url}/productos`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <Producto[]>();
  constructor(private http: HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Producto[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(producto: Producto) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, producto, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Producto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Producto>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(a:Producto){
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



 //querry
  getProductosConComentarios(): Observable<ProductoComentario[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<ProductoComentario[]>(`${this.url}/producto-comentario`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }


 getmejorcalificados(): Observable<qProductocalificados[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<qProductocalificados[]>(`${this.url}/productocalificado`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

}
