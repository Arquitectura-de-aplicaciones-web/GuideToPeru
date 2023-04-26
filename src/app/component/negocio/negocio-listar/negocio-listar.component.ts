import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/model/negocio';
import { NegocioService } from 'src/app/service/negocio.service';
import { MatTableDataSource } from '@angular/material/table';
import { NegocioDialogoComponent } from './negocio-dialogo/negocio-dialogo.component';
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css'],
})
export class NegocioListarComponent implements OnInit {
  lista: Negocio[] = []
  dataSource: MatTableDataSource<Negocio> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'nameNegocio', 'direccionNegocio','telefono','emailNegocio','tipoNegocio','IDUsuario','accion01','accion02'];

  constructor(private uS: NegocioService,private dialog:Dialog) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }  
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(NegocioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(z:any){
this.dataSource.filter= z.target.value.trim();
  }

}
