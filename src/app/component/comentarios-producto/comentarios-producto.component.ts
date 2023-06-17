import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios-producto',
  templateUrl: './comentarios-producto.component.html',
  styleUrls: ['./comentarios-producto.component.css']
})
export class ComentariosProductoComponent implements OnInit{
  constructor(public route:ActivatedRoute) {}
  ngOnInit():void {}
}
