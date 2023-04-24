import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/model/negocio';
import { NegocioService } from 'src/app/service/negocio.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css'],
})
export class NegocioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Negocio> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nameNegocio', 'direccionNegocio','telefono','emailNegocio','tipoNegocio','IDUsuario','accion01'];

  constructor(private uS: NegocioService) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }  

  filtrar(z:any){
this.dataSource.filter= z.target.value.trim();
  }

}
