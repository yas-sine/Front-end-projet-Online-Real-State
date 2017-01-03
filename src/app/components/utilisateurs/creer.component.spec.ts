/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreerComponent } from './creer.component';

describe('CreerComponent', () => {
  let component: CreerComponent;
  let fixture: ComponentFixture<CreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
