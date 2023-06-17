import { Component, OnInit } from '@angular/core';
import { ComentariosNegocioService } from 'src/app/service/comentarios-negocio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentarios-negocios-dialogo',
  templateUrl: './comentarios-negocios-dialogo.component.html',
  styleUrls: ['./comentarios-negocios-dialogo.component.css']
})
export class ComentariosNegociosDialogoComponent implements OnInit {
  constructor(private uS: ComentariosNegocioService, private dialogRef:MatDialogRef<ComentariosNegociosDialogoComponent>) {}

  ngOnInit():void {}

  confirmar(estado:boolean){
    this.uS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
