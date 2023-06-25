import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table'
import { ComentarioNegocio } from 'src/app/model/comentariosNegocio';
import { ComentariosNegocioService } from 'src/app/service/comentarios-negocio.service';
import { ComentariosNegociosDialogoComponent } from './comentarios-negocios-dialogo/comentarios-negocios-dialogo.component';
import { LoginService } from 'src/app/service/login.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-comentarios-negocios-listar',
  templateUrl: './comentarios-negocios-listar.component.html',
  styleUrls: ['./comentarios-negocios-listar.component.css']
})
export class ComentariosNegociosListarComponent implements OnInit{
  dataSource:MatTableDataSource<ComentarioNegocio> = new MatTableDataSource();
  displayedColumns:string[] = ['idComentarioNegocio','comentario', 'calificacion', 'idNegocio', 'idCliente','accion01','accion02'];

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  idMayor: number = 0
  lista: ComentarioNegocio[] = []
  role:string="";

  constructor(private uS:ComentariosNegocioService, private dialog:MatDialog,private ls:LoginService) {}
  ngOnInit():void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator

      this.uS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })

    })
  }

  confirm(id:number) {
    this.idMayor = id;
    this.dialog.open(ComentariosNegociosDialogoComponent);
  }

  eliminar(id:number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(z:any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
