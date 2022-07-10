import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraBusquedaComponent } from './ui/components/barra-busqueda/barra-busqueda.component';
import { DetalleProductosComponent } from './ui/components/detalle-productos/detalle-productos.component';
import { ListaProductosComponent } from './ui/components/lista-productos/lista-productos.component';
import { HomeProductosContainerComponent } from './ui/containers/home-productos-container/home-productos-container.component';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     component: HomeProductosContainerComponent
//   },
//   {
//     path: 'items',
//     children: [
//       {
//         path: '',
//         pathMatch: 'full',
//         component: ListaProductosComponent
//       },
//       {
//         path: '',
//         pathMatch: 'full',
//         component: DetalleProductosComponent
//       },
//     ]
//   }
// ];

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
