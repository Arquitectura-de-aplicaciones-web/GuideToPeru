import { Component,OnInit, ViewChild } from '@angular/core';
import { qCompraProducto } from 'src/app/model/qCompraProducto';
import { ComprasService } from 'src/app/service/compras.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  qcompraCount: qCompraProducto[] = [];
  dataSource: MatTableDataSource<qCompraProducto> = new MatTableDataSource();

  displayedColumns: string[] = ['name','compraCount']

  constructor(private bS: ComprasService) { }

  ngOnInit(): void {
    this.bS.getcompraproducto().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getcompraproducto(): void {
    this.bS.getcompraproducto()
      .subscribe((data: qCompraProducto[]) => {
        this.qcompraCount = data;
      });
  }

}
