import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Destino } from 'src/app/model/Destinos';
import { MatTableDataSource } from '@angular/material/table'
import { DestinoService } from 'src/app/service/destino.service';
import { MatDialog } from '@angular/material/dialog'
import { DestinoDialogoComponent } from './destino-dialogo/destino-dialogo.component';
import { LoginService } from 'src/app/service/login.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-destino-listar',
  templateUrl: './destino-listar.component.html',
  styleUrls: ['./destino-listar.component.css']
})

export class DestinoListarComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  role:string="";
  lista: Destino[] = []
  dataSource: MatTableDataSource<Destino> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'Nombre', 'Ubicacion', 'Descripcion',
  'Imagen', 'Distrito', 'Departamento','acciones1','acciones2']

  constructor(private aS: DestinoService, private dialog: MatDialog,private ls:LoginService) {

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DestinoDialogoComponent);
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
