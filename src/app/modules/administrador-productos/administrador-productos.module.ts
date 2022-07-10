import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorProductosRoutingModule } from './administrador-productos-routing.module';
import { HomeProductosContainerComponent } from './ui/containers/home-productos-container/home-productos-container.component';
import { BarraBusquedaComponent } from './ui/components/barra-busqueda/barra-busqueda.component';
import { ListaProductosComponent } from './ui/components/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './ui/components/detalle-productos/detalle-productos.component';
import { BreadCrumbComponent } from './ui/components/bread-crumb/bread-crumb.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeProductosContainerComponent,
    BarraBusquedaComponent,
    ListaProductosComponent,
    DetalleProductosComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    AdministradorProductosRoutingModule,
    // BrowserModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdministradorProductosModule { }
