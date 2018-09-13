import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyComponent } from './body.component';

import { CardComponent } from './../card/card.component';
import { Component } from '@angular/core';

describe('AppBodyComponent', () => {
  let component: AppBodyComponent;
  let fixture: ComponentFixture<AppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyComponent, MockCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-card',
  template: ''
})
class MockCardComponent {
}