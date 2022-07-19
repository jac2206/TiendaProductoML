import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DetalleProductosComponent } from '../../ui/components/detalle-productos/detalle-productos.component';

describe('DetalleProductosComponent', () => {
  let component: DetalleProductosComponent;
  let fixture: ComponentFixture<DetalleProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ DetalleProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
