import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';
import { Usuario } from '../model/usuario';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = `${base_url}/usuarios`
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Usuario[]>(this.url)
  }

}
