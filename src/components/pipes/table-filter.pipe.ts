import { Pipe, PipeTransform } from '@angular/core';
import { filterHistoryTable } from '../utils';

@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  transform(list: any[], searchText: string): any {
    return filterHistoryTable(list, searchText);
  }
}
