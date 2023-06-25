import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Negocio } from 'src/app/model/negocio';
import { NegocioService } from 'src/app/service/negocio.service';
import { MatTableDataSource } from '@angular/material/table';
import { NegocioDialogoComponent } from './negocio-dialogo/negocio-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css'],
})
export class NegocioListarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: Negocio[] = []
  dataSource: MatTableDataSource<Negocio> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'nameNegocio', 'direccionNegocio','tiponegocio','idusuario','calificacion','accion01','accion02'];
  role:string="";
  
  constructor(private uS: NegocioService,private dialog:MatDialog, private ls:LoginService) {}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  })
  }  
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(NegocioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(z:any){
this.dataSource.filter= z.target.value.trim();
  }
}