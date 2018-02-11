import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  
    transform(records: Array<any>, args?: any): any {
      return records.sort(function(a, b){
          if(a[args.property] < b[args.property]){
              return -1 * args.direction;
          }
          else if( a[args.property] > b[args.property]){
              return 1 * args.direction;
          }
          else{
              return 0;
          }
      });
    };
}
