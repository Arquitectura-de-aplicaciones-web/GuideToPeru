import { Component,OnInit, ViewChild  } from '@angular/core';
import { DistritosVisitados } from 'src/app/model/DistritosVisitados';
import { DestinoService } from 'src/app/service/destino.service';
import { MatTableDataSource } from '@angular/material/table'
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.css']
})
export class Reporte4Component implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  departamentoCount: DistritosVisitados[] = [];
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
        this.departamentoCount = data;
      });
  }

}
