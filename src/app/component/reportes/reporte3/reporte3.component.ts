import { Component,OnInit, ViewChild } from '@angular/core';
import { DestinoService } from 'src/app/service/destino.service';
import { MatTableDataSource } from '@angular/material/table'
import {MatSidenav} from '@angular/material/sidenav';
import { DistritosVisitados } from 'src/app/model/DistritosVisitados';

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
  distritoCount: DistritosVisitados[] = [];
  dataSource: MatTableDataSource<DistritosVisitados> = new MatTableDataSource();

  displayedColumns: string[] = ['distrito','distritoCount']

  constructor(private bS: DestinoService) { }

  ngOnInit(): void {
    this.bS.getdistritosvisitados().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getdistritosvisitados(): void {
    this.bS.getdistritosvisitados()
      .subscribe((data: DistritosVisitados[]) => {
        this.distritoCount = data;
      });
  }

}
