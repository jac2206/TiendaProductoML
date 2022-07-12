import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map, of } from 'rxjs';
import { ItemsDTO } from 'src/app/shared/common/entidades/items-dto';
import { ProductosServiceService } from '../../../infraestructura/productos-service.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.scss']
})
export class DetalleProductosComponent implements OnInit {

  categorias: string[] = [];
  producto: ItemsDTO | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiDetalleProducto: ProductosServiceService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter((params: Params) => params['id']),
        map((params: Params) => params['id'])
      )
      .subscribe((id: string) => {
        this.ConsultarDetalleProduto(id)
      });
  }

  ConsultarDetalleProduto(id: string) {
    this.apiDetalleProducto.ObtenerDetalleProducto(id).subscribe({
      next: (detalleProducto) =>{
        this.categorias = detalleProducto.categories;
        this.producto = detalleProducto.item;
      },
      error: (err) => {
        let errHandled = false;
        if (err instanceof HttpErrorResponse) {
          const httpErr = err as HttpErrorResponse;
          if (httpErr.status === 404) {
            errHandled = true;
            this.router.navigate(['/']);
            alert(`El producto ${id} no existe`);
          }
        }
        if (!errHandled) {
          alert('U Estamos con dificultades técnicas. Por favor intenta más tarde');
        }
      }
    });
  }

  ConsultarDetalleProdutoDeprecado(id: string) {
    this.apiDetalleProducto.ObtenerDetalleProducto(id).subscribe(detalleProducto => {
      this.categorias = detalleProducto.categories;
      this.producto = detalleProducto.item;
    }, err => {
      let errHandled = false;
      if (err instanceof HttpErrorResponse) {
        const httpErr = err as HttpErrorResponse;
        if (httpErr.status === 404) {
          errHandled = true;
          this.router.navigate(['/']);
          alert(`El producto ${id} no existe`);
        }
      }
      if (!errHandled) {
        alert('U Estamos con dificultades técnicas. Por favor intenta más tarde');
      }
    });
  }

  Comprar() {
    alert('El producto se añadio a tu carrito');
  }


}
