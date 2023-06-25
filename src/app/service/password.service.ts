import { Injectable } from '@angular/core';
import { Password } from '../model/password';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = "https://www.psswrd.net/api/v1";



@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private url = `${base_url}/password/?length=15&lower=1&upper=1&int=1&special=0`;
  private listaCambio = new Subject<Password[]>();
  
  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<Password>(this.url);
  }

  setList(ListaNueva: Password[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
