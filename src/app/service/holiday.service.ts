import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Holiday } from '../model/holiday';
import { Subject } from 'rxjs';

const base_url = "https://date.nager.at";


@Injectable({
  providedIn: 'root'
})


export class HolidayService {
  private url = `${base_url}/api/v3/publicholidays/2023/PE/`
  private listaCambio = new Subject<Holiday[]>();
  
  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<Holiday[]>(this.url);
  }

  setList(ListaNueva: Holiday[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

}
