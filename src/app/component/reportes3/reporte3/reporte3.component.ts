import { Component,OnInit, ViewChild } from '@angular/core';
import { ProductoComentario } from 'src/app/model/ProductoComentario';
import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table'
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.css']
})
export class Reporte3Component implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  comentario: ProductoComentario[] = [];
  dataSource: MatTableDataSource<ProductoComentario> = new MatTableDataSource();

  displayedColumns: string[] = ['nombre','comentario']

  constructor(private bS: ProductoService) { }

  ngOnInit(): void {
    this.getProductosConComentarios();
  }

  getProductosConComentarios(): void {
    this.bS.getProductosConComentarios()
      .subscribe((data: ProductoComentario[]) => {
        this.comentario = data;
        this.dataSource = new MatTableDataSource(this.comentario);
      });
  }
}
