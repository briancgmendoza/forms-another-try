import { Pipe, PipeTransform } from '@angular/core';
/**
 * usage: *ngFor="let item of data | key"
 */
@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  /**
   * @param value - object of objects
   * @param args
   * @returns {Array}
   */
  transform(value: any, args?: any): any {
    let keys = [];

    if (value) {
      for (let key in value) {
        keys.push({ key: key, value: value[key] });
      }
    }
    return keys;
  }
}
