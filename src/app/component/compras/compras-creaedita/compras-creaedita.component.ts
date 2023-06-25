import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { compras } from 'src/app/model/compras';
import * as moment from 'moment'
import { ComprasService } from 'src/app/service/compras.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { Cliente } from 'src/app/model/clientes';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-compras-creaedita',
  templateUrl: './compras-creaedita.component.html',
  styleUrls: ['./compras-creaedita.component.css']
})
export class ComprasCreaeditaComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  id: number = 0
  edicion: boolean = false
  form: FormGroup = new FormGroup({});
  compras: compras = new compras();
  mensaje: string = "";
  fecha_max: Date = moment().add(1, 'days').toDate();
  idProductoSeleccionado: number = 0;
  lista1: Producto[] = [];
  idClienteSeleccionado: number = 0;
  lista2: Cliente[] = [];
  role:string="";

  ngOnInit(): void {
    this.role=this.los.showRole();
    console.log(this.role);
    
    this.pS.list().subscribe(data => { this.lista1 = data });
    this.lS.list().subscribe(data => { this.lista2 = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['idCompra'];
      this.edicion = data['idCompra'] != null;
      this.init();
    })

    this.form = new FormGroup({
      idCompra: new FormControl(),
      cantidadCompra: new FormControl(),
      precioCompra: new FormControl(),
      descripcionCompra: new FormControl(),
      fechaCompra: new FormControl(),
      clienteCompra: new FormControl(),
      productoCompra: new FormControl(),
    })

  }

  constructor(private cS: ComprasService, private router: Router, private route: ActivatedRoute, private lS: ClienteService,
    private pS: ProductoService, private los :LoginService) { }

  aceptar(): void {
    this.compras.idCompra = this.form.value['idCompra'];
    this.compras.cantidadCompra = this.form.value['cantidadCompra'];
    this.compras.precioCompra = this.form.value['precioCompra'];
    this.compras.descripcionCompra = this.form.value['descripcionCompra'];
    this.compras.fechaCompra = this.form.value['fechaCompra'];
    this.compras.clienteCompra = this.form.value['clienteCompra'];
    this.compras.productoCompra.nombre = this.form.value['productoCompra.nombre'];
    if (this.form.value['cantidadCompra'] > 0 &&
      this.form.value['precioCompra'] > 0 &&
      this.form.value['descripcionCompra'].length > 0 && this.idClienteSeleccionado > 0 && this.idProductoSeleccionado > 0) {

      if (this.edicion) {
        let a = new Cliente();
        a.id=this.idClienteSeleccionado;
        let b = new Producto();
        b.idProducto=this.idProductoSeleccionado;
        this.cS.update(this.compras).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })

        })
      } else {
        let a = new Cliente();
        a.id=this.idClienteSeleccionado;
        let b = new Producto();
        b.idProducto=this.idProductoSeleccionado;
        this.cS.insert(this.compras).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      }
      this.router.navigate(['/pages/compras']);

    }
    else {
      this.mensaje = "Ingrese los datos de la compra"
    }
  }

  init() {

    if (this.edicion) {
      this.cS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({

          idCompra: new FormControl(data.idCompra),
          cantidadCompra: new FormControl(data.cantidadCompra),
          precioCompra: new FormControl(data.precioCompra),
          descripcionCompra: new FormControl(data.descripcionCompra),
          fechaCompra: new FormControl(data.fechaCompra),
          clienteCompra: new FormControl(data.clienteCompra.id),
          productoCompra: new FormControl(data.productoCompra.idProducto)

        })

      })
    }
  }

}
