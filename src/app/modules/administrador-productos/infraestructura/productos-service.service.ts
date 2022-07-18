import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, map, throwError as observableThrowError } from 'rxjs';
import { DetalleProductoDTO } from '../dominio/entidades/detalle-producto-dto';
import { ListaProductosDTO } from '../dominio/entidades/lista-productos-dto';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  @Output() detallesEnCategorias: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

    //Azure
    public BuscarProductos(search: string) {
      return this.http.get<ListaProductosDTO>(`${environment.apiProductos}/api/items?q=${search}`)
          .pipe(map(listaProductos => listaProductos), catchError(this.HandleError));
    }

    public ObtenerDetalleProducto(id: string) {
      return this.http.get<DetalleProductoDTO>(`${environment.apiProductos}/api/items/${id}`)
          .pipe(map(detalleProducto => detalleProducto), catchError(this.HandleError));
    }

  private HandleError(res: HttpErrorResponse | any) {
    console.error(res);
    return observableThrowError(res || 'Server error');
  }
}
