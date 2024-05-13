import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(items: any[], sortBy: string, sortOrder: number): any[] {
    if (!items || !sortBy) {
      return items;
    }

    return items.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1 * sortOrder;
      }

      if (a[sortBy] > b[sortBy]) {
        return 1 * sortOrder;
      } 
      
      return 0;
    });
  }
}
