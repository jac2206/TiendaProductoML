import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError as observableThrowError } from 'rxjs';
import { DetalleProductoDTO } from '../dominio/entidades/detalle-producto-dto';
import { ListaProductosDTO } from '../dominio/entidades/lista-productos-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public BuscarProductos(search: string) {
    return this.http.get<ListaProductosDTO>(`http://localhost:3000/api/items?q=${search}`)
        .pipe(map(listaProductos => listaProductos), catchError(this.HandleError));
  }

  public ObtenerDetalleProducto(id: string) {
    return this.http.get<DetalleProductoDTO>(`http://localhost:3000/api/items/${id}`)
        .pipe(map(detalleProducto => detalleProducto), catchError(this.HandleError));
  }

  //con proxu\y
  // public BuscarProductos(search: string) {
  //   return this.http.get<ListaProductosDTO>(`/api/items?q=${search}`)
  //       .pipe(map(listaProductos => listaProductos), catchError(this.HandleError));
  // }

  // public ObtenerDetalleProducto(id: string) {
  //   return this.http.get<DetalleProductoDTO>(`/api/items/${id}`)
  //       .pipe(map(detalleProducto => detalleProducto), catchError(this.HandleError));
  // }

  private HandleError(res: HttpErrorResponse | any) {
    console.error(res);
    return observableThrowError(res || 'Server error');
  }
}
