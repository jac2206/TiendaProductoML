import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map, of, Subscription } from 'rxjs';
import { ItemsDTO } from 'src/app/shared/common/entidades/items-dto';
import { MensajeRespuestaEstadohttp } from 'src/app/shared/common/util/mensajerespuestaestadohttp';
import { ProductosServiceService } from '../../../infraestructura/productos-service.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.scss']
})
export class DetalleProductosComponent implements OnInit, OnDestroy {

  categorias: string[] = [];
  producto: ItemsDTO | undefined;
  public routeSuscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiDetalleProducto: ProductosServiceService,
    private mensajesHttp: MensajeRespuestaEstadohttp
  ) { }

  ngOnInit(): void {
   this.ObtenerPathParamIdProducto();
  }

  ngOnDestroy(): void {
    this.routeSuscription?.unsubscribe()
  }

  ObtenerPathParamIdProducto(){
    this.routeSuscription = this.route.params
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
        alert(this.mensajesHttp.ErrorConsularListaProductos(err));
        this.router.navigate(['/']);
      }
    });
  }

  Comprar() {
    alert('El producto se añadio a tu carrito');
  }
}
