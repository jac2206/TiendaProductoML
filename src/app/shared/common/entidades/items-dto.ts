import { PrecioDTO } from "./precio-dto";
import { UbicacionDTO } from "./ubicacion-dto";

export interface ItemsDTO {
  id: string;
  title: string;
  price : PrecioDTO;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: UbicacionDTO;
  sold_quantity: number;
  description: String;
}
