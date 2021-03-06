import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelccionado = new EventEmitter<number>();

  constructor(private router: Router) {
    this.heroeSelccionado = new EventEmitter ();
  }

  ngOnInit(): void {
  }

  verHeroe(): any {
    this.router.navigate (['/heroe', this.index]);
    // this.heroeSelccionado.emit(this.index);
  }

}
