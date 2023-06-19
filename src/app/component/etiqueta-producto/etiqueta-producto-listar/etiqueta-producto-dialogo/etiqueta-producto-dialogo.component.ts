import { Component, OnInit } from '@angular/core';
import { EtiquetaProductoService } from 'src/app/service/etiqueta-producto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-etiqueta-producto-dialogo',
  templateUrl: './etiqueta-producto-dialogo.component.html',
  styleUrls: ['./etiqueta-producto-dialogo.component.css']
})
export class EtiquetaProductoDialogoComponent implements OnInit{
  constructor(private aS: EtiquetaProductoService,
    private dialogRef: MatDialogRef<EtiquetaProductoDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
