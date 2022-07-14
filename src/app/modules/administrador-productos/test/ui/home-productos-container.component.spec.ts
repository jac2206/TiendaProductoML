import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductosContainerComponent } from '../../ui/containers/home-productos-container/home-productos-container.component';

describe('HomeProductosContainerComponent', () => {
  let component: HomeProductosContainerComponent;
  let fixture: ComponentFixture<HomeProductosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
