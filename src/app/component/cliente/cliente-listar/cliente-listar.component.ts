import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  displayedColumns:string[]=['Codigo','Nombre','Apellido','Fecha','Email','Telefono','Direccion','Usuario','N°Cuenta']

  constructor(private cS: ClienteService) { }

  ngOnInit(): void {

    this.cS.list().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);

    })
    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    })

  }

}
