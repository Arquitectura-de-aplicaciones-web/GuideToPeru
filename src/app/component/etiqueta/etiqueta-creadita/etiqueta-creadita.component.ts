import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Etiqueta } from 'src/app/model/Etiqueta';

import { EtiquetaService } from 'src/app/service/etiqueta.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import {MatSidenav} from '@angular/material/sidenav';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-etiqueta-creadita',
  templateUrl: './etiqueta-creadita.component.html',
  styleUrls: ['./etiqueta-creadita.component.css']
})
export class EtiquetaCreaditaComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  form: FormGroup = new FormGroup({});
  etiqueta: Etiqueta = new Etiqueta();
  mensaje: string = "";
  idEtiqueta: number = 0;
  edicion: boolean = false;
  role:string="";

  constructor(private aS: EtiquetaService, private router: Router, private route: ActivatedRoute, private ls :LoginService) {
  }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    
    this.route.params.subscribe((data: Params) => {
      this.idEtiqueta = data['idEtiqueta'];
      this.edicion = data['idEtiqueta'] != null;
      this.init();
    })
    this.form = new FormGroup({
      idEtiqueta: new FormControl(),
      nombreEtiqueta: new FormControl(),
    });
  }


  aceptar(): void {
    this.etiqueta.idEtiqueta = this.form.value['idEtiqueta'];
    this.etiqueta.nombreEtiqueta= this.form.value['nombreEtiqueta'];

    if (this.form.value['nombreEtiqueta'].length > 0)       {

      if (this.edicion) {
        this.aS.update(this.etiqueta).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.etiqueta).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/etiqueta']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.idEtiqueta).subscribe(data => {
        this.form = new FormGroup({
          idEtiqueta: new FormControl(data.idEtiqueta),
          nombreEtiqueta: new FormControl(data.nombreEtiqueta),

        })
      })
    }
  }
}
