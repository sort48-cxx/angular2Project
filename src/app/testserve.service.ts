import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserveService {

  constructor() { }

  debug(message:string){
    console.log(message);
  }
}
