import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  environment:string = 'development';

  log(message: any) {
    if (this.environment === 'development') {
      console.log(message);
    }
  }

}