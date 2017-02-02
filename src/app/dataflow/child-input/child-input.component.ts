import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addItem(item: string) {
    console.log(`Child triggered add item for '${item}'`);
    this.onAdd.emit(item);
  }

}
