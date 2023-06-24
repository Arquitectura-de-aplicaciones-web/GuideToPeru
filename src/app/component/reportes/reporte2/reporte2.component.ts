import { Component,OnInit, ViewChild } from '@angular/core';
import { DepartamentosVisitados } from 'src/app/model/DepartamentosVisitados';
import { DestinoService } from 'src/app/service/destino.service';
import { MatTableDataSource } from '@angular/material/table'
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  departamentoCount: DepartamentosVisitados[] = [];
  dataSource: MatTableDataSource<DepartamentosVisitados> = new MatTableDataSource();

  displayedColumns: string[] = ['departarmento','departarmentoCount']

  constructor(private bS: DestinoService) { }

  ngOnInit(): void {
    this.bS.getdepartamentovisitados().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getdepartamentovisitados(): void {
    this.bS.getdepartamentovisitados()
      .subscribe((data: DepartamentosVisitados[]) => {
        this.departamentoCount = data;
      });
  }

}
