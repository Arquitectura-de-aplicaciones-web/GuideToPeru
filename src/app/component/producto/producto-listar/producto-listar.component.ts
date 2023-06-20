import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Producto } from 'src/app/model/producto';
import { MatTableDataSource } from '@angular/material/table'
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialog } from '@angular/material/dialog'
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

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
  displayedColumns: string[] = ['idproducto', 'nombre', 'descripcion',
  'precio','cantidad', 'visible', 'calificacion','idnegocio','acciones1','acciones2']
  role:string="";
  constructor(private aS: ProductoService, private dialog: MatDialog,private ls:LoginService) {

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
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
  confirm(idproducto: number) {
    this.idMayor = idproducto;
    this.dialog.open(ProductoDialogoComponent);
  }
  eliminar(idproducto: number) {
    this.aS.delete(idproducto).subscribe(() => {
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
