import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComentariosProducto } from 'src/app/model/ComentariosProducto';
import { Cliente } from 'src/app/model/clientes';
import { Producto } from 'src/app/model/producto';
import { ComentariosProductoService } from 'src/app/service/comentarios-producto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-comentarios-producto-creaedita',
  templateUrl: './comentarios-producto-creaedita.component.html',
  styleUrls: ['./comentarios-producto-creaedita.component.css']
})
export class ComentariosProductoCreaeditaComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  comentarioproducto: ComentariosProducto= new ComentariosProducto();
  mensaje: string = '';
  idProducto: number=0;
  lista: Producto[] = [];
  cliente: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
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
    private route: ActivatedRoute
  ) {}
  aceptar(): void {
    this.comentarioproducto.idComentarioProducto = this.form.value['idComentarioProducto'];
    this.comentarioproducto.comentario = this.form.value['comentario'];
    this.comentarioproducto.calificacion = this.form.value['calificacion'];
    this.comentarioproducto.producto = this.form.value['producto'];
    this.comentarioproducto.cliente = this.form.value['cliente'];

    if (this.form.value['comentario'].length > 0 && this.form.value['calificacion'].length > 0) {
      if (this.edicion) {
        this.aS.update(this.comentarioproducto).subscribe(()=>{
          this.aS.list().subscribe(data => {
            this.aS.setList(data)
          })
        })
      } else {
        this.aS.insert(this.comentarioproducto).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['comentariosproducto']);
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
          producto: new FormControl(data.producto),
          cliente: new FormControl(data.cliente),

        });
      });
    }
  }
}
