import { Pipe, PipeTransform } from '@angular/core';
import { filterHistoryTable } from '../utils';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], searchText: string): any {
    return filterHistoryTable(list, searchText);
  }

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  // transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }
}