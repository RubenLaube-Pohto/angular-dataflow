import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceService } from './service.service';
import { ChildInputComponent } from './child-input/child-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, ChildComponent, ChildInputComponent],
  exports: [ ParentComponent ],
  providers: [ ServiceService ]
})
export class DataflowModule { }
