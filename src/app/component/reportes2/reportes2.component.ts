import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportes2',
  templateUrl: './reportes2.component.html',
  styleUrls: ['./reportes2.component.css']
})
export class Reportes2Component {
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
  }
}
