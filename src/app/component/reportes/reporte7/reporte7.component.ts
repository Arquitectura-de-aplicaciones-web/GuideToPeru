import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import {MatSidenav} from '@angular/material/sidenav';
import { qProductocalificados } from 'src/app/model/qProductocalificado';
import { ProductoService } from 'src/app/service/producto.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reporte7',
  templateUrl: './reporte7.component.html',
  styleUrls: ['./reporte7.component.css']
})
export class Reporte7Component {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  qmejorcalificados: qProductocalificados[] = [];
  dataSource: MatTableDataSource<qProductocalificados> = new MatTableDataSource();
  role:string="";
  displayedColumns: string[] = ['nombre']

  constructor(private nS: ProductoService,private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.nS.getmejorcalificados().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getmejorcalificados(): void {
    this.nS.getmejorcalificados()
      .subscribe((data: qProductocalificados[]) => {
        this.qmejorcalificados = data;
      });
  }


}
