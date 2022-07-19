import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent implements OnInit, OnDestroy {

  filter: string | undefined;

  constructor(
    private route: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit(): void {
   this.ObtenerQueryParamBuscador();
  }

  ngOnDestroy(): void {}

  ObtenerQueryParamBuscador(){
    this.route.queryParams
    .pipe(
        filter((params: Params) => params['search']),
        map((params: Params) => params['search'])
    )
    .subscribe(search => {
        this.filter = search;
    });
  }

  buscar() {
    this.router.navigate(['/items'], { queryParams: { search: this.filter } });
  }
}
