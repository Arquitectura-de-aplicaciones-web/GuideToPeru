import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment'
import { PasswordService } from 'src/app/service/password.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {
  id:number = 0;
  edicion:boolean = false;
  form:FormGroup = new FormGroup({});
  usuario:Usuario = new Usuario();
  mensaje:string = "";
  maxFecha:Date = moment().add(1, 'days').toDate();
  role:string="";
  password_generated: string = "";

  @ViewChild('sidenav') sidenav!:MatSidenav;
  reason = '';
  close(reason:string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  ngOnInit():void {
    this.role=this.ls.showRole();
    console.log(this.role);
    
    this.route.params.subscribe((data: Params) => {

      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })

    this.form = new FormGroup({
      id: new FormControl(),
      emailUsuario: new FormControl(),
      contraseniaUsuario: new FormControl(),
      telefonoUsuario: new FormControl(),
    })
  }

  constructor(private uS:UsuarioService, private pS: PasswordService,
    private router: Router,
    private route: ActivatedRoute, private ls:LoginService) { }

  aceptar():void {
    this.usuario.id = this.form.value['id'];
    this.usuario.email = this.form.value['emailUsuario'];
    this.usuario.password = this.form.value['password'];
    this.usuario.telefono = this.form.value['telefono'];

    if (this.form.value['emailUsuario'].length > 0 && this.form.value['password'].length > 0 && this.form.value['telefono'].length > 0) {

      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(() => {
          this.uS.list().subscribe(data => {
            this.uS.setList(data)
          })
        })
      } else {
        this.uS.insert(this.usuario).subscribe(data => {
          this.uS.list().subscribe(data => {
            this.uS.setList(data)
          })
        })
      }
      this.router.navigate(['/pages/usuarios']);
    } else {
      this.mensaje = "Ingrese los datos del usuario"
    }
  }

  init() {
    if (this.edicion) {
      this.uS.listID(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          emailUsuario: new FormControl(data.email),
          contraseniaUsuario: new FormControl(data.password),
          telefonoUsuario: new FormControl(data.telefono)
        })
      })
    }
  }

  generate_password() {
    this.pS.list().subscribe(data => {
      this.password_generated = data.password;
    })
  }
}
