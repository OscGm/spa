import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServise: HeroesService
              ){
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesServise.getHeroe(params.id);
    });

   }

  ngOnInit(): void {
  }

}
