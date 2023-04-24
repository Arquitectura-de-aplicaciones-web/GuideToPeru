import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Negocio } from '../model/negocio';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class NegocioService {
  private url = `${base_url}/Negocio`;
  private listaCambio = new Subject <Negocio[]>();
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Negocio[]>(this.url);
  }

  insert(negocio: Negocio) {
    return this.http.post(this.url, negocio);
  }
  setList(listaNueva:Negocio[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Negocio>(`${this.url}/${id}`);
  }
  update(a:Negocio){
    return this.http.put(this.url+"/"+a.id,a);

  }
}
