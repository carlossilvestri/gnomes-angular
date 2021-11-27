import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Brastlewark } from 'src/app/core/interfaces/brastlewark-requests.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() brastlewark: Brastlewark;
  @Input() index: number;

  defaultImage = 'https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif';
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }
  /**
   * Go to route /brastlewark/:id
   */
  seeGnome(): void{
    this.router.navigate( ['/brastlewark', this.index]);
  }
}
