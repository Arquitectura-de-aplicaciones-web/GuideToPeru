import { Component, OnInit } from '@angular/core';
import { ComentariosProductoService } from 'src/app/service/comentarios-producto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentarios-producto-dialogo',
  templateUrl: './comentarios-producto-dialogo.component.html',
  styleUrls: ['./comentarios-producto-dialogo.component.css']
})
export class ComentariosProductoDialogoComponent implements OnInit{
  constructor(private uS: ComentariosProductoService,
    private dialogRef: MatDialogRef<ComentariosProductoService>) {}
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.uS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
