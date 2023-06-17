import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Producto } from 'src/app/model/producto';
import { MatTableDataSource } from '@angular/material/table'
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialog } from '@angular/material/dialog'
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: Producto[] = []
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['idProducto', 'imagen', 'nombre', 'descripcion',
  'precio','cantidad', 'visible', 'calificacion','idNegocio','acciones1','acciones2']

  constructor(private aS: ProductoService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(idProducto: number) {
    this.idMayor = idProducto;
    this.dialog.open(ProductoDialogoComponent);
  }
  eliminar(idProducto: number) {
    this.aS.delete(idProducto).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
export class PaginatorOverviewExample {}
