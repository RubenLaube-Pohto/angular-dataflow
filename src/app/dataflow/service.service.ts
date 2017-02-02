import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  data: string[] = [
    'asd', 'asder', 'asdest'
  ]

  constructor() { }

  getData() { return this.data; }

  deleteItem(i: number) {
    this.data.splice(i, 1);
    console.log(`Service deleted item ${i}`);
  }

  addItem(item: string) {
    this.data.push(item);
    console.log(`Service added item ${item}`);
  }

}
