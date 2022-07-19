import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductosServiceService } from '../../infraestructura/productos-service.service';
import { ListaProductosDTO } from '../../dominio/entidades/lista-productos-dto'
import { ListaProductosComponent } from '../../ui/components/lista-productos/lista-productos.component';
import {of} from 'rxjs'
import { Router } from '@angular/router';


class MockRouter {
  navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}

describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;
  let productosServices: ProductosServiceService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule],
      declarations: [ ListaProductosComponent ],
      providers: [ProductosServiceService,
        {Router, useClass: MockRouter}
      ]
    })


    .compileComponents();

    productosServices = TestBed.inject(ProductosServiceService);
    httpClient = TestBed.inject(HttpClient);


    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Mock Obtener Productos buscador', () => {
    const mockEmployee: ListaProductosDTO = {
      author: {
          name: "Julian",
          lastname: "Arango Correa"
      },
      categories: [
          "Celulares y Teléfonos",
          "Celulares y Smartphones"
      ],
      items: [
          {
              id: "MLA931455240",
              title: "Apple iPhone 11 (128 Gb) - Blanco",
              price: {
                  currency: "ARS",
                  amount: 4,
                  decimals: 247099
              },
              picture: "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
              condition: "new",
              free_shipping: true,
              location: {
                  state: "Capital Federal",
                  city: "Palermo"
              },
              sold_quantity : 0,
              description : ''
          },
          {
              id: "MLA1135106098",
              title: "Apple iPhone 11 (64 Gb) - Blanco",
              price: {
                  currency: "ARS",
                  amount: 2,
                  decimals: 224900
              },
              picture: "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
              condition: "new",
              free_shipping: true,
              location: {
                  "state": "Buenos Aires",
                  "city": "Ramos Mejía"
              },
              sold_quantity : 0,
              description : ''
          },
          {
              id: "MLA913659191",
              title: "Apple iPhone SE (2da Generación) 128 Gb - Blanco",
              price: {
                  "currency": "ARS",
                  "amount": 1,
                  "decimals": 174999
              },
              picture: "http://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg",
              condition: "new",
              free_shipping: true,
              location: {
                  state: "Buenos Aires",
                  city: "Villa Lynch"
              },
              sold_quantity : 0,
              description : ''
          },
          {
              id: "MLA1146342877",
              title: "Apple iPhone SE (2da Generación) 64 Gb - Negro",
              price: {
                  currency: "ARS",
                  amount: 1,
                  decimals: 165000
              },
              picture: "http://http2.mlstatic.com/D_658260-MLA46552695787_062021-I.jpg",
              condition: "new",
              free_shipping: true,
              location: {
                  state: "Capital Federal",
                  city: "CABA"
              },
              sold_quantity : 0,
              description : ''
          }
      ]
    }
    spyOn(httpClient, 'get').and.returnValue(of(mockEmployee))
    productosServices.BuscarProductos("Iphone").subscribe(items => {
    expect(items).toEqual(mockEmployee);
    })
  });
});
