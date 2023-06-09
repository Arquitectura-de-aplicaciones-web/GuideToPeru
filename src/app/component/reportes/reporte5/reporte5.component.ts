import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import {MatSidenav} from '@angular/material/sidenav';
import { qMejorcalificados } from 'src/app/model/qMejorcalificados';
import { NegocioService } from 'src/app/service/negocio.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.css']
})
export class Reporte5Component {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  qmejorcalificados: qMejorcalificados[] = [];
  dataSource: MatTableDataSource<qMejorcalificados> = new MatTableDataSource();
  role:string="";
  displayedColumns: string[] = ['nameNegocio']

  constructor(private nS: NegocioService, private ls:LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.nS.getmejorcalificados().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  getmejorcalificados(): void {
    this.nS.getmejorcalificados()
      .subscribe((data: qMejorcalificados[]) => {
        this.qmejorcalificados = data;
      });
  }

}
