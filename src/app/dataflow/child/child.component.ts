import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: string[];
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`Child data: ${this.data}`);
  }

  deleteItem(index: number) {
    console.log(`Child triggered deleteItem() on item ${index}`);
    this.onDelete.emit(index);
  }

}
