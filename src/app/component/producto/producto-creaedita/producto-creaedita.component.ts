import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from 'src/app/model/producto';

import { ProductoService } from 'src/app/service/producto.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  form: FormGroup = new FormGroup({});
  producto: Producto = new Producto();
  mensaje: string = "";
  idProducto: number = 0;
  edicion: boolean = false;

  constructor(private aS: ProductoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idProducto = data['idProducto'];
      this.edicion = data['idProducto'] != null;
      this.init();
    })
    this.form = new FormGroup({
      idProducto: new FormControl(),
      imagen: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      visible: new FormControl(),
      calificacion: new FormControl(),
      idNegocio: new FormControl(),
      cantidad: new FormControl()
    });
  }

  //del modelo
  aceptar(): void {
    this.producto.idProducto = this.form.value['idProducto'];
    this.producto.imagen= this.form.value['imagen'];
    this.producto.nombre = this.form.value['nombre'];
    this.producto.descripcion = this.form.value['descripcion'];
    this.producto.precio = this.form.value['precio'];
    this.producto.visible = this.form.value['visible'];
    this.producto.calificacion = this.form.value['calificacion'];
    this.producto.idNegocio = this.form.value['idNegocio'];
    this.producto.cantidad = this.form.value['cantidad'];



    if (this.form.value['nombre'].length > 0 &&
      this.form.value['descripcion'].length > 0)       {

      if (this.edicion) {
        this.aS.update(this.producto).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.producto).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['productos']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.idProducto).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.idProducto),
          imagen: new FormControl(data.imagen),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          precio: new FormControl(data.precio),
          visible: new FormControl(data.visible),
          calificacion: new FormControl(data.calificacion),
          idNegocio: new FormControl(data.idNegocio),
          cantidad: new FormControl(data.cantidad)
        })
      })
    }
  }


}
