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
/*const TREE_DATA: FoodNode[] = [
  {
    name: 'Clientes',
    children: [{name: 'Registros'}, {name: 'Insertar'},]
  },
  {
    name: 'Negocios',
    children: [{name: 'Registros'}, {name: 'Insertar'},]
  },
  {
    name: 'Productos',
    children: [{name: 'Registros'}, {name: 'Insertar'},]
  },
  {
    name: 'Compras',
    children: [{name: 'Registros'}, {name: 'Insertar'},]
  },
  {
    name: 'Destinos',
    children: [{name: 'Registros'}, {name: 'Insertar'},]
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];*/

/** Flat node with expandable and level information */
/*interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}*/

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  /*private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };*/

  /*treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );*/
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  /*treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );*/
  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  //dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

onNodeClick(node: Node) {
  if (node.children) {
    this.treeControl.toggle(node);
  } else {
    this.router.navigate(['/route-to-' + node.name.toLowerCase()]);
  }
}
}