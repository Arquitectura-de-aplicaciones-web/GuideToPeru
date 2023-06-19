import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etiqueta-producto',
  templateUrl: './etiqueta-producto.component.html',
  styleUrls: ['./etiqueta-producto.component.css']
})
export class EtiquetaProductoComponent implements OnInit{
  constructor(public route:ActivatedRoute) {

  }
  ngOnInit(): void {

  }
}
