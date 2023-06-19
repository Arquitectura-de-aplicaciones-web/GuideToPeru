import { Component, OnInit } from '@angular/core';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-etiqueta-dialogo',
  templateUrl: './etiqueta-dialogo.component.html',
  styleUrls: ['./etiqueta-dialogo.component.css']
})
export class EtiquetaDialogoComponent implements OnInit {
  constructor(private aS: EtiquetaService,
    private dialogRef: MatDialogRef<EtiquetaDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
