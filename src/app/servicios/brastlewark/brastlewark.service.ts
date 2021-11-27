import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AllBrastlewark, Brastlewark } from 'src/app/core/interfaces/brastlewark-requests.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HelpersService } from '../helpers/helpers.service';

@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {
  private url = environment.baseUrl;
  constructor(public http: HttpClient, public helpersService: HelpersService) { }

  /*
  Doc: getAllBrastlewarkCallHttp. Hace una pet a la BD para obtener un obj de AllBrastlewark.
  Return: obj: AllBrastlewark | any.
  Nota: any porque puede que haya un error al enviar la solicitud.
  */
  getAllBrastlewarkCallHttp() : Observable<AllBrastlewark> {
    const url = `${this.url}`;
    return this.http.get<AllBrastlewark>(url)
    .pipe(
      map((resp: AllBrastlewark) => {
        console.log(resp);
        this.helpersService.saveOnLocalStorage('AllBrastlewark', resp);
        return resp;
      })
    );
  }
  buscarBrastlewark(termino: string): Brastlewark[]{
    const brastlewarksFiltered: Brastlewark[] = [];
    termino = termino.toLowerCase();
    let allBrastlewark = this.getAllBrastlewarLocalMemory();
    console.log(" allBrastlewark ", allBrastlewark);
    for (let i = 0; i < allBrastlewark.Brastlewark.length; i++){
      const brastlewark = allBrastlewark.Brastlewark[i];
      const nombre = brastlewark.name.toLowerCase();
      if (nombre.indexOf(termino) >= 0){
        brastlewark.idx = i;
        brastlewarksFiltered.push(brastlewark);
      }
    }
    return brastlewarksFiltered;
  }
  getAllBrastlewarLocalMemory() : AllBrastlewark | any {
    return this.helpersService.getFromLocalStorage('AllBrastlewark');
  }
  getBrastlewark(id: string): Brastlewark{
    let allBrastlewark : AllBrastlewark  = this.helpersService.getFromLocalStorage('AllBrastlewark');
    return allBrastlewark.Brastlewark[id];
  }
}
