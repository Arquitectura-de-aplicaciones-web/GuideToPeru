import { Component,OnInit, ViewChild } from '@angular/core';
import { ComprasService } from 'src/app/service/compras.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import {MatSidenav} from '@angular/material/sidenav';
import { qCompraCliente } from 'src/app/model/qCompraCliente';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.css']
})
export class Reporte6Component {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = true;
  qcompraCount: qCompraCliente[] = [];
  dataSource: MatTableDataSource<qCompraCliente> = new MatTableDataSource();
  role:string="";
  displayedColumns: string[] = ['name','compraCount']

  constructor(private bS: ComprasService,private ls:LoginService) { }

  ngOnInit(): void {  
    this.role=this.ls.showRole();
    console.log(this.role);
    this.bS.getcompracliente().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getcompraproducto(): void {
    this.bS.getcompracliente()
      .subscribe((data: qCompraCliente[]) => {
        this.qcompraCount = data;
      });
  }






}
