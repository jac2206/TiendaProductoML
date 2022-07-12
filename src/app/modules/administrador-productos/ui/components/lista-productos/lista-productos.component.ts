import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs';
import { ItemsDTO } from 'src/app/shared/common/entidades/items-dto';
import { ProductosServiceService } from '../../../infraestructura/productos-service.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  search: string = "";
  public categorias: string[] = [];
  public productos: ItemsDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiProductos: ProductosServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
        filter((params: Params) => params['search']),
        map((params: Params) => params['search'])
    ).subscribe(search => {
        this.search = search;
        this.ConsultarListaProductos(this.search)
    });
  }

  ConsultarListaProductos(search: string){
    this.apiProductos.BuscarProductos(search).subscribe({
      next: (listaProductos) => {
        this.categorias = listaProductos.categories
        this.productos = listaProductos.items;
      },
      error:(err) => {
        alert('Estamos con dificultades técnicas. Por favor intenta más tarde');
      }
    });
  }

  ConsultarListaProductosDeprecado(search: string){
    this.apiProductos.BuscarProductos(search).subscribe(listaProductos => {
        console.log(listaProductos)
        this.categorias = listaProductos.categories
        this.productos = listaProductos.items;
        console.log(this.categorias)
        console.log(this.productos)
    }, err => {
        alert('Estamos con dificultades técnicas. Por favor intenta más tarde');
    });
  }

}
