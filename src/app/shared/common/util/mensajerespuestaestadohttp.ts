import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Statushttp } from "../enum/statushttp";

@Injectable({
  providedIn: 'root'
})

export class MensajeRespuestaEstadohttp {


  ErrorConsularListaProductos(err: any) : string{
    if (err instanceof HttpErrorResponse) {
      const httpErr = err as HttpErrorResponse;
      return this.MensajeErrorHTTPS(httpErr.status);
    }
    return 'Error no controlado';
  }

  private MensajeErrorHTTPS(status: number): string{
    if (status === Statushttp.NOT_FOUND) {
      return `El producto no existe/Error api`;
    }
    if (status === Statushttp.UNAUTHORIZED) {
      return `no estas autenticado`;
    }
    if (status === Statushttp.INTERNAR_SERVER_ERROR) {
      return `Error en la api. Por favor contactar a soporte`;
    }
    if (status === Statushttp.BAD_REQUEST) {
      return `Request obtenido mal`;
    }
    if(status === Statushttp.FORBIDDEN){
      return 'La api no se enuentra ejecutandose. Por favor comunicarse con TI'
    }
    return 'Estamos con dificultades técnicas. Por favor intenta más tarde'
  }

}
