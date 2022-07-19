import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductosComponent } from './ui/components/detalle-productos/detalle-productos.component';
import { ListaProductosComponent } from './ui/components/lista-productos/lista-productos.component';
import { HomeProductosContainerComponent } from './ui/containers/home-productos-container/home-productos-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductosContainerComponent,
    children: [
      {
        path: 'items',
        children: [
          {
            path: '',
            component: ListaProductosComponent
          },
          {
            path: ':id',
            component: DetalleProductosComponent
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorProductosRoutingModule { }
