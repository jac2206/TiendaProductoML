import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BarraBusquedaComponent } from '../../ui/components/barra-busqueda/barra-busqueda.component';

describe('BarraBusquedaComponent', () => {
  let component: BarraBusquedaComponent;
  let fixture: ComponentFixture<BarraBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ BarraBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
