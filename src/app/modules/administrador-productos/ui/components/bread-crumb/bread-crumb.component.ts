import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../../infraestructura/productos-service.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit, OnDestroy {

  @Input()
  migaDePanCategorias: string[] = [];

  categories?: {
    categorias: string[];
  } ;

  constructor(
    private apiProductos: ProductosServiceService
  ) { }

  ngOnInit(): void {
    this.ObtenerCategorias();
  }

  ngOnDestroy() {
    this.apiProductos.detallesEnCategorias.unsubscribe();
  }

  ObtenerCategorias(){
    this.apiProductos.detallesEnCategorias.subscribe((categorias: any) => {
      this.migaDePanCategorias = categorias.categorias;
    })
  }

}
