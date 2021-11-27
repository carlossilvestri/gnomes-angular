import { Pipe, PipeTransform } from '@angular/core';
import { Brastlewark } from '../core/interfaces/brastlewark-requests.interface';

@Pipe({
  name: 'filtergnomes'
})
export class FiltergnomesPipe implements PipeTransform {

  transform(brastlewarks: Brastlewark[], term: string): Brastlewark[] {
    // Check if term is undefined or a string.
    if(term === undefined || term === '') return brastlewarks;
    return brastlewarks.filter(function(brastlewark){
      return brastlewark.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
