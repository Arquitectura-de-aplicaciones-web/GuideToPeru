import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Cliente } from 'src/app/model/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';
import { LoginService } from 'src/app/service/login.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  lista: Cliente[] = []
  idMayor: number = 0
  displayedColumns:string[]=['Codigo','Nombre','Apellido','Fecha','Direccion','idusuario','N°Cuenta','accion01','acciones2']
  role:string="";

  constructor(private cS: ClienteService, private dialog: MatDialog, private ls:LoginService) { }


  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.cS.list().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })
    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })
      this.cS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
    
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ClienteDialogoComponent);
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      })
    })
  }
  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
