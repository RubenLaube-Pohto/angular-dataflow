/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildInputComponent } from './child-input.component';

describe('ChildInputComponent', () => {
  let component: ChildInputComponent;
  let fixture: ComponentFixture<ChildInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
