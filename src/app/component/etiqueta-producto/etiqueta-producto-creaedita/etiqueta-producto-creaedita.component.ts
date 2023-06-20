import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EtiquetaProducto } from 'src/app/model/EtiquetaProducto';

import { EtiquetaProductoService } from 'src/app/service/etiqueta-producto.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-etiqueta-producto-creaedita',
  templateUrl: './etiqueta-producto-creaedita.component.html',
  styleUrls: ['./etiqueta-producto-creaedita.component.css']
})
export class EtiquetaProductoCreaeditaComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  form: FormGroup = new FormGroup({});
  etiquetaProducto: EtiquetaProducto = new EtiquetaProducto();
  mensaje: string = "";
  idEtiquetaProducto: number = 0;
  edicion: boolean = false;

  constructor(private aS: EtiquetaProductoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idEtiquetaProducto = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      idEtiquetaProducto: new FormControl(),
      idProducto: new FormControl(),
      idEtiqueta: new FormControl()
    });
  }

  //del modelo
  aceptar(): void {

    this.etiquetaProducto.idEtiquetaProducto = this.form.value['idEtiquetaProducto'];
    this.etiquetaProducto.producto = this.form.value['idProducto'];
    this.etiquetaProducto.etiqueta = this.form.value['idEtiqueta'];

    if (this.form.value['idProducto'].length > 0 &&
      this.form.value['idEtiqueta'].length > 0)       {

      if (this.edicion) {
        this.aS.update(this.etiquetaProducto).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.etiquetaProducto).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/etiquetaProducto']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.idEtiquetaProducto).subscribe(data => {
        this.form = new FormGroup({
          idEtiquetaProducto: new FormControl(data.idEtiquetaProducto),
          idProducto: new FormControl(data.producto.idproducto),
          idEtiqueta: new FormControl(data.etiqueta.idEtiqueta),

        })
      })
    }
  }
}
