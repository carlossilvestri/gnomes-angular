import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brastlewark } from 'src/app/core/interfaces/brastlewark-requests.interface';
import { BrastlewarkService } from 'src/app/servicios/brastlewark/brastlewark.service';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  brastlewark: Brastlewark;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService, public brastlewarkService: BrastlewarkService) {
    this.activatedRoute.params.subscribe(params => {
      this.brastlewark = this.brastlewarkService.getBrastlewark(params.id);
    });
  }

  ngOnInit(): void {
  }

}
