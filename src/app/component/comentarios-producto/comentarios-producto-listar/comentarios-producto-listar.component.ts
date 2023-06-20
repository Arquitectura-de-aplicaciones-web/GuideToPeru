import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Producto } from 'src/app/model/producto';
import { ComentarioProducto } from 'src/app/model/ComentarioProducto';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosProductoService } from 'src/app/service/comentarios-producto.service';


@Component({
  selector: 'app-comentarios-producto-listar',
  templateUrl: './comentarios-producto-listar.component.html',
  styleUrls: ['./comentarios-producto-listar.component.css']
})
export class ComentariosProductoListarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: Producto[]=[]
  dataSource: MatTableDataSource<ComentarioProducto> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'comentario', 'calificacion','producto','cliente','accion01','accion02'];
  constructor(private uS: ComentariosProductoService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ComentariosProductoListarComponent);
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
export class PaginatorOverviewExample {}
