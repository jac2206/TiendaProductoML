import { AutorDTO } from "src/app/shared/common/entidades/autor-dto";
import { ItemsDTO } from "src/app/shared/common/entidades/items-dto";

export interface ListaProductosDTO {
  author: AutorDTO;
  categories: string[];
  items: ItemsDTO[];
}
