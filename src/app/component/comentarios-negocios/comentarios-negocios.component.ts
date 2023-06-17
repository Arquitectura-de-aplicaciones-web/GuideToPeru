import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comentarios-negocios',
  templateUrl: './comentarios-negocios.component.html',
  styleUrls: ['./comentarios-negocios.component.css']
})
export class ComentariosNegociosComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
