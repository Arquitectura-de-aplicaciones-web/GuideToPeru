import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComentarioProducto } from 'src/app/model/ComentarioProducto';
import { Producto } from 'src/app/model/producto';
import { ComentariosProductoService } from 'src/app/service/comentarios-producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Cliente } from 'src/app/model/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProductoService } from 'src/app/service/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-comentarios-producto-creaedita',
  templateUrl: './comentarios-producto-creaedita.component.html',
  styleUrls: ['./comentarios-producto-creaedita.component.css']
})
export class ComentariosProductoCreaeditaComponent implements OnInit {

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
  comentarioproducto: ComentarioProducto = new ComentarioProducto();
  mensaje: string = '';
  idProductoSeleccionado: number = 0;
  lista1: Producto[] = [];
  idClienteSeleccionado: number = 0;
  lista2: Cliente[] = [];
  role:string="";

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.pS.list().subscribe(data => { this.lista1 = data });
    this.cS.list().subscribe(data => { this.lista2 = data });

    this.form = new FormGroup({
      idComentarioProducto: new FormControl(),
      comentario: new FormControl(),
      calificacion: new FormControl(),
      producto: new FormControl(),
      cliente: new FormControl(),
    });
  }
  constructor(
    private aS: ComentariosProductoService,
    private router: Router,
    private route: ActivatedRoute,
    private cS: ClienteService,
    private pS: ProductoService,
    private ls: LoginService
  ) { }
  aceptar(): void {
    this.comentarioproducto.idComentarioProducto = this.form.value['idComentarioProducto'];
    this.comentarioproducto.comentario = this.form.value['comentario'];
    this.comentarioproducto.calificacion = this.form.value['calificacion'];
    this.comentarioproducto.producto.nombre = this.form.value['producto.nombre'];
    this.comentarioproducto.cliente.nameCliente = this.form.value['cliente.nameCliente'];

    if (this.form.value['comentario'].length > 0 && this.form.value['calificacion'].length > 0 && this.idClienteSeleccionado > 0 && this.idProductoSeleccionado > 0) {
      if (this.edicion) {
        let a = new Cliente();
        a.id=this.idClienteSeleccionado;
        let b = new Producto();
        b.idProducto=this.idProductoSeleccionado;
        this.aS.update(this.comentarioproducto).subscribe(() => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data)
          })
        })
      } else {
        let a = new Cliente();
        a.id=this.idClienteSeleccionado;
        let b = new Producto();
        b.idProducto=this.idProductoSeleccionado;
        this.aS.insert(this.comentarioproducto).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/comentariosproducto']);
    } else {
      this.mensaje = 'Ingrese el comentario';
    }
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idComentarioProducto: new FormControl(data.idComentarioProducto),
          comentario: new FormControl(data.comentario),
          calificacion: new FormControl(data.calificacion),
          producto: new FormControl(data.producto.idProducto),
          cliente: new FormControl(data.cliente.id),

        });
      });
    }
  }
}
