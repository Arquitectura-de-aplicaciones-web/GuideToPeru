import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/clientes';
import * as moment from 'moment'
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayService } from 'src/app/service/holiday.service';
import { Holiday } from 'src/app/model/holiday';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente-creaedita',
  templateUrl: './cliente-creaedita.component.html',
  styleUrls: ['./cliente-creaedita.component.css']
})
export class ClienteCreaeditaComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  mensaje: string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();
  lista: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  role:string="";

  dataSource: MatTableDataSource<Holiday> = new MatTableDataSource();
  displayedColumns:string[]=['localName', 'date']


  constructor(private cS: ClienteService, private hS: HolidayService,
    private router: Router,
    private route: ActivatedRoute, private uS: UsuarioService, private ls :LoginService) { }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.hS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.uS.list().subscribe(data => { this.lista = data })

    this.form = new FormGroup({
      id: new FormControl(),
      nameCliente: new FormControl(),
      apellidoCliente: new FormControl(),
      anioNacimiento: new FormControl(),
      direccion: new FormControl(),
      idusuario: new FormControl(),
      cuentaBancaria: new FormControl(),
    });
  }

  aceptar(): void {
    this.cliente.id = this.form.value['id'];
    this.cliente.nameCliente = this.form.value['nameCliente'];
    this.cliente.apellidoCliente = this.form.value['apellidoCliente'];
    this.cliente.anioNacimiento = this.form.value['anioNacimiento'];
    this.cliente.direccion = this.form.value['direccion'];
    this.cliente.idusuario.id = this.form.value['idusuario'];
    this.cliente.cuentaBancaria = this.form.value['cuentaBancaria']

    if (this.form.value['nameCliente'].length > 0 &&
      this.form.value['apellidoCliente'].length > 0 && this.form.value['cuentaBancaria'].length > 0 && this.idUsuarioSeleccionado > 0) {

      if (this.edicion) {
        let a = new Usuario();
        a.id = this.idUsuarioSeleccionado;
        this.cliente.idusuario = a;
        this.cS.update(this.cliente).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      } else {
        let a = new Usuario();
        a.id = this.idUsuarioSeleccionado;
        this.cliente.idusuario = a;
        this.cS.insert(this.cliente).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      }
      this.router.navigate(['/pages/clientes']);
    } else {
      this.mensaje = "Ingrese los datos del cliente"
    }
  }


  init() {
    if (this.edicion) {
      this.cS.listID(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameCliente: new FormControl(data.nameCliente),
          apellidoCliente: new FormControl(data.apellidoCliente),
          anioNacimiento: new FormControl(data.anioNacimiento),
          direccion: new FormControl(data.direccion),
          idusuario: new FormControl(data.idusuario.id),
          cuentaBancaria: new FormControl(data.cuentaBancaria),
        })
      })
    }
  }

  
}
