import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _heroesServise: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesServise.buscarHeroe(params.termino);
      console.log(this.heroes);
    });
  }

  verHeroe( idx: number): any{
    // idx = this.termino.length;
    this.router.navigate (['/heroe', idx]);
  }

}
