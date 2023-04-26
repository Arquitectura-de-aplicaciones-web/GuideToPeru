import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Clientes',
    children: [
      { name: 'Registros' },
      { name: 'Insertar' }
    ]
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

onNodeClick(node: Node) {
  if (node.children) {
    this.treeControl.toggle(node);
  } else {
    this.router.navigate(['/route-to-' + node.name.toLowerCase()]);
  }
}
}