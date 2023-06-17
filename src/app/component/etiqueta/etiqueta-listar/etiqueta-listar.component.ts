import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Etiqueta } from 'src/app/model/Etiqueta';
import { MatTableDataSource } from '@angular/material/table'
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { MatDialog } from '@angular/material/dialog'
import { EtiquetaDialogoComponent } from './etiqueta-dialogo/etiqueta-dialogo.component';


@Component({
  selector: 'app-etiqueta-listar',
  templateUrl: './etiqueta-listar.component.html',
  styleUrls: ['./etiqueta-listar.component.css']
})
export class EtiquetaListarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: Etiqueta[] = []
  dataSource: MatTableDataSource<Etiqueta> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['idEtiqueta', 'nombre','acciones1','acciones2']

  constructor(private aS: EtiquetaService, private dialog: MatDialog) {

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
    this.dialog.open(EtiquetaDialogoComponent);
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
