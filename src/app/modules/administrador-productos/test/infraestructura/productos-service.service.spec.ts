import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductosServiceService } from '../../infraestructura/productos-service.service';

describe('ProductosServiceService', () => {
  let service: ProductosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
