import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { EtiquetaProducto } from 'src/app/model/EtiquetaProducto';
import { MatTableDataSource } from '@angular/material/table'
import { EtiquetaProductoService } from 'src/app/service/etiqueta-producto.service';
import { MatDialog } from '@angular/material/dialog'
import { EtiquetaProductoDialogoComponent } from './etiqueta-producto-dialogo/etiqueta-producto-dialogo.component'

@Component({
  selector: 'app-etiqueta-producto-listar',
  templateUrl: './etiqueta-producto-listar.component.html',
  styleUrls: ['./etiqueta-producto-listar.component.css']
})
export class EtiquetaProductoListarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: EtiquetaProducto[] = []
  dataSource: MatTableDataSource<EtiquetaProducto> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['idEtiquetaProducto', 'idProducto','idEtiqueta','acciones1','acciones2']

  constructor(private aS: EtiquetaProductoService, private dialog: MatDialog) {

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
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(EtiquetaProductoDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
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
