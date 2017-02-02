import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data: string[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.data = this.serviceService.getData();
    console.log(`Parent data: ${this.data}`);
  }

  deleteItem(index: number) {
    console.log(`Parent received ${index}`);
    this.serviceService.deleteItem(index);
  }

  addItem(item: string) {
    console.log(`Parent received ${item}`);
    this.serviceService.addItem(item);
  }

}
