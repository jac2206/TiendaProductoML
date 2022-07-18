import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ItemsDTO } from 'src/app/shared/common/entidades/items-dto';
import { ProductosServiceService } from '../../../infraestructura/productos-service.service';
import { Statushttp } from 'src/app/shared/common/enum/statushttp';
import { MensajeRespuestaEstadohttp } from 'src/app/shared/common/util/mensajerespuestaestadohttp';

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
    private router: Router,
    private apiProductos: ProductosServiceService,
    private mensajesHttp: MensajeRespuestaEstadohttp
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
        this.apiProductos.detallesEnCategorias.emit({
          categorias: this.categorias
        })
      },
      error:(err) => {
        alert(this.mensajesHttp.ErrorConsularListaProductos(err));
        this.router.navigate(['/']);
      }
    });
  }
}
