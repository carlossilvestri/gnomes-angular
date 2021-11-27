import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/servicios/brastlewark/brastlewark.service';
import { AllBrastlewark } from 'src/app/core/interfaces/brastlewark-requests.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  allBrastlewark: AllBrastlewark;
  loadingAllBrastlewark: Boolean = false;
  constructor(
    public brastlewarkService: BrastlewarkService
  ) {}

  ngOnInit(): void {
    this.getAllBrastlewark();
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
