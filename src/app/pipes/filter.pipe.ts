import { PropertyRead } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allItems: any[], searchkey: string, propoertyName: string): any[] {
    /* array from transform */
    const result: any = []
    if (!allItems || searchkey == '' || propoertyName == '') {
      return allItems
    }

    allItems.forEach((item: any) => {
      if(item [propoertyName].trim().toLowerCase().includes(searchkey.trim().toLowerCase()))
      result.push(item)
    })
    return result;
  }

}
