import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public myForm: FormGroup;

  @Input() data: string[];
  @Output() onDelete = new EventEmitter();

  constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.group({
      myFormInput: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
    console.log(`Child data: ${this.data}`);
  }

  deleteItem(index: number) {
    console.log(`Child triggered deleteItem() on item ${index}`);
    this.onDelete.emit(index);
  }

}
