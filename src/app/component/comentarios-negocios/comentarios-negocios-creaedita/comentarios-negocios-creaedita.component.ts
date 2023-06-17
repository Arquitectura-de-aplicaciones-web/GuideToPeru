import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComentariosNegocio} from 'src/app/model/ComentariosNegocio';
import { Cliente } from 'src/app/model/clientes';
import { Producto } from 'src/app/model/producto';
import { ComentariosNegocioService } from 'src/app/service/comentarios-negocio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-comentarios-negocios-creaedita',
  templateUrl: './comentarios-negocios-creaedita.component.html',
  styleUrls: ['./comentarios-negocios-creaedita.component.css']
})
export class ComentariosNegociosCreaeditaComponent implements OnInit{
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
  comentariosnegocio: ComentariosNegocio= new ComentariosNegocio();
  mensaje: string = '';
  lista: Producto[] = [];
  lista2: Cliente[] = [];


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      comentario: new FormControl(),
      calificacion: new FormControl(),
      idNegocio: new FormControl(),
      idCliente: new FormControl(),
    });
  }
  constructor(
    private aS: ComentariosNegocioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  aceptar(): void {
    this.comentariosnegocio.comentario = this.form.value['comentario'];
    this.comentariosnegocio.calificacion = this.form.value['calificacion'];
    this.comentariosnegocio.idNegocio = this.form.value['idNegocio'];
    this.comentariosnegocio.idCliente = this.form.value['idCliente'];

    if (this.form.value['comentario'].length > 0 && this.form.value['calificacion'].length > 0) {
      if (this.edicion) {
        this.aS.update(this.comentariosnegocio).subscribe(()=>{
          this.aS.list().subscribe(data => {
            this.aS.setList(data)
          })
        })
      } else {
        this.aS.insert(this.comentariosnegocio).subscribe(data => {
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
          comentario: new FormControl(data.comentario),
          calificacion: new FormControl(data.calificacion),
          idNegocio: new FormControl(data.idNegocio),
          idCliente: new FormControl(data.idCliente)

        });
      });
    }
  }
}
