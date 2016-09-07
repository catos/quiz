import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oretokrone'
})
export class OreToKronePipe implements PipeTransform {
  transform(value: number, digits = 2) {
    let kroner = value / 100;
    return 'kr ' + kroner.toFixed(digits);
  }
}