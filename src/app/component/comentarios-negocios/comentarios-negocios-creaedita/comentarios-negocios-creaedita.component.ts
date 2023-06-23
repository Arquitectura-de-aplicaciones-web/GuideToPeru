import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComentarioNegocio } from 'src/app/model/comentariosNegocio';
import { Cliente } from 'src/app/model/clientes';
import { Producto } from 'src/app/model/producto';
import { ComentariosNegocioService } from 'src/app/service/comentarios-negocio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { ClienteService } from 'src/app/service/cliente.service';
import { NegocioService } from 'src/app/service/negocio.service';
import { Negocio } from 'src/app/model/negocio';

@Component({
  selector: 'app-comentarios-negocios-creaedita',
  templateUrl: './comentarios-negocios-creaedita.component.html',
  styleUrls: ['./comentarios-negocios-creaedita.component.css']
})
export class ComentariosNegociosCreaeditaComponent implements OnInit {
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
  comentariosnegocio: ComentarioNegocio = new ComentarioNegocio();
  mensaje: string = '';
  lista: Negocio[] = [];
  lista2: Cliente[] = [];
  idClienteSeleccionado: number = 0;
  idNegocioSeleccionado: number = 0;

  ngOnInit(): void {
    this.cS.list().subscribe(data => { this.lista2=data });
    this.nS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      comentario: new FormControl(),
      calificacion: new FormControl(),
      negocio: new FormControl(),
      cliente: new FormControl(),
    });
  }
  constructor(
    private aS: ComentariosNegocioService,
    private router: Router,
    private route: ActivatedRoute,
    private cS: ClienteService,
    private nS: NegocioService
  ) { }
  aceptar(): void {
    this.comentariosnegocio.comentario = this.form.value['comentario'];
    this.comentariosnegocio.calificacion = this.form.value['calificacion'];
    this.comentariosnegocio.negocio.id = this.form.value['negocio.id'];
    this.comentariosnegocio.cliente.id = this.form.value['cliente.id'];

    if (this.form.value['comentario'].length > 0 && this.form.value['calificacion'].length > 0 && this.idClienteSeleccionado > 0 && this.idNegocioSeleccionado > 0) {
      if (this.edicion) {
        this.aS.update(this.comentariosnegocio).subscribe(() => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data)
          })
        })
      } else {
        let a=new Cliente();
        a.id=this.idClienteSeleccionado;
        this.comentariosnegocio.cliente=a;
        let b=new Negocio();
        b.id=this.idNegocioSeleccionado;
        this.comentariosnegocio.negocio=b;
        this.aS.insert(this.comentariosnegocio).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/comentario_negocio']);
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
          negocio: new FormControl(data.negocio.id),
          cliente: new FormControl(data.cliente.id)

        });
      });
    }
  }
}
