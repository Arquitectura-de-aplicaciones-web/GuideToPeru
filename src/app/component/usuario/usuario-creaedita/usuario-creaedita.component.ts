import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent {
  form: FormGroup =  new FormGroup({});
  usuario:Usuario =  new Usuario();
  mensaje:String = "";
  maxFecha:Date = moment().add(1, 'days').toDate();

  constructor(private uS:UsuarioService, private router:Router) {}
  ngOnInit(): void {
      this.form = new FormGroup({
        id:new FormControl(),
        email:new FormControl(),
        contrasenia:new FormControl(),
        telefono:new FormControl()
      })
  }
  aceptar(): void {
    this.usuario.id = this.form.value['id'];
    this.usuario.email = this.form.value['email'];
    this.usuario.contrasenia = this.form.value['contrasenia'];
    this.usuario.telefono = this.form.value['telefonor'];

    if (this.form.value['email'].length > 0 && this.form.value['contrasenia'].length > 0 && this.form.value['telefono'].length > 0) {
      this.uS.insert(this.usuario).subscribe(data => {
        this.uS.list().subscribe(data => {
          this.uS.setList(data);
        })
      })
      this.router.navigate(['usuarios'])
    } else {
      this.mensaje =  "Ingrese los datos del author";
    }
  }
}
