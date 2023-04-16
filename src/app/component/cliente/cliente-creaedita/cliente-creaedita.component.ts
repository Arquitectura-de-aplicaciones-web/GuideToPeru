import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/clientes';
import * as moment from 'moment'
import { ClienteService } from 'src/app/service/cliente.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-creaedita',
  templateUrl: './cliente-creaedita.component.html',
  styleUrls: ['./cliente-creaedita.component.css']
})
export class ClienteCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  mensaje: string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nameCliente: new FormControl(),
      apellidoCliente: new FormControl(),
      anioNacimiento: new FormControl(),
      emailCliente: new FormControl(),
      telefono: new FormControl(),
      direccion: new FormControl(),
      IDUsuario: new FormControl(),
      cuentaBancaria: new FormControl(),
    })
  }

  constructor(private cS: ClienteService, private router: Router) { }
  aceptar(): void {
    this.cliente.id = this.form.value['id'];
    this.cliente.nameCliente = this.form.value['nameCliente'];
    this.cliente.apellidoCliente = this.form.value['apellidoCliente'];
    this.cliente.anioNacimiento = this.form.value['anioNacimiento'];
    this.cliente.emailCliente = this.form.value['emailCliente'];
    this.cliente.telefono = this.form.value['telefono'];
    this.cliente.direccion = this.form.value['direccion'];
    this.cliente.IDUsuario = this.form.value['IDUsuario'];
    this.cliente.cuentaBancaria = this.form.value['cuentaBancaria']

    if (this.form.value['nameCliente'].length > 0 &&
      this.form.value['apellidoCliente'].length > 0 &&
      this.form.value['emailCliente'].length > 0 &&
      this.form.value['cuentaBancaria'].length > 0) {

      this.cS.insert(this.cliente).subscribe(data => {
        this.cS.list().subscribe(data => {
          this.cS.setList(data)
        })
      })
      this.router.navigate(['clientes']);
    } else {
      this.mensaje = "Ingrese los datos del cliente!!"
    }
  }
}
