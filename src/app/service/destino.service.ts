import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Destino } from '../model/Destinos';
import { Subject,Observable } from 'rxjs';
import { DepartamentosVisitados } from '../model/DepartamentosVisitados';
import { DistritosVisitados } from '../model/DistritosVisitados';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url = `${base_url}/destinos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Destino[]>()

  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Destino[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(Destino: Destino) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, Destino, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Destino[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Destino>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(aut: Destino) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,aut, {
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


  //query
  getdepartamentovisitados(): Observable<DepartamentosVisitados[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<DepartamentosVisitados[]>(`${this.url}/departamento-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getdistritosvisitados(): Observable<DistritosVisitados[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<DistritosVisitados[]>(`${this.url}/distrito-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }


}
