import { Component, OnInit } from '@angular/core';
import { compras } from 'src/app/model/compras';
import { ComprasService } from 'src/app/service/compras.service';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-compras-listar',
  templateUrl: './compras-listar.component.html',
  styleUrls: ['./compras-listar.component.css']
})
export class ComprasListarComponent implements OnInit {
  dataSource: MatTableDataSource<compras> = new MatTableDataSource();
  displayedColumns: string[] = ['codigo', 'cantidad', 'precio_total', 'descripcion', 'fecha', 'cliente_codigo', 'negocio_codigo']
  constructor(private cS: ComprasService) {

  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  filtrar(z:any){
    this.dataSource.filter=z.target.value.trim();
  }


}
