import { Pipe, PipeTransform } from '@angular/core';
import { Mba } from '@models/mba.model';

@Pipe({
  name: 'filterOptions',
  standalone: true
})
export class FilterOptionsPipe implements PipeTransform {
  transform(options: Mba[], searchText: string): Mba[] {
    if (!options || !searchText) {
      return options;
    }

    searchText = searchText.toLowerCase();
    const filteredOptions = options.filter(option => {
      return option.name.toLowerCase().includes(searchText);
    });

    if (filteredOptions.length === 0) {
      return [{ code: '', name: 'No se encontró el MBA' }];
    }

    return filteredOptions;
  }
}

