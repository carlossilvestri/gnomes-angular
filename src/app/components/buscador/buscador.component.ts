import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllBrastlewark } from 'src/app/core/interfaces/brastlewark-requests.interface';
import { BrastlewarkService } from 'src/app/servicios/brastlewark/brastlewark.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  allBrastlewark: AllBrastlewark;
  termino: string = '';
  loadingAllBrastlewark: Boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public brastlewarkService: BrastlewarkService) { }

  ngOnInit(): void {
    this.onInitBuscador();
  }
  /**
   * Function to be loaded when calling the component 'BuscadorComponent'
   */
  onInitBuscador() : void {
    this.activatedRoute.params.subscribe(params => {
      this.getAllBrastlewark();
      this.termino = params.termino;
    });
  }

    /**
   * Fill variable allBrastlewark : AllBrastlewark.
   */
     getAllBrastlewarkCallHttp() : void{
      this.loadingAllBrastlewark = true;
      this.brastlewarkService.getAllBrastlewarkCallHttp().subscribe(
        (resp) => {
        this.allBrastlewark = resp;
        this.loadingAllBrastlewark = false;
        }
      );
    }
    /** 
    * get AllBrastlewark variable, and make a http call if there is no data.
    */
    getAllBrastlewark() : void{
      let allBrastlewark : AllBrastlewark =  this.brastlewarkService.getAllBrastlewarLocalMemory();
      if(allBrastlewark){
        console.log("paso con local storage");
        this.allBrastlewark = allBrastlewark;
      }else{
        console.log("no paso on local storage");
        this.getAllBrastlewarkCallHttp();
      }
    }

}
