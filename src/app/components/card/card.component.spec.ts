import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, MockStarsComponent, MockButtonComponent, MockMatInput, MockCardFooter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //create unit test
  it('should change boolean variable for opening modal window', () => {
    component.openModal();
    expect(component.openFormWindow).toBeTruthy();
  })
});

@Component({
  selector: 'app-stars',
  template: ''
})
class MockStarsComponent {
}

@Component({
  selector: 'app-button',
  template: ''
})
class MockButtonComponent {
}

@Component({
  selector: 'app-mat-input',
  template: ''
})
class MockMatInput {
}

@Component({
  selector: 'app-card-footer',
  template: ''
})
class MockCardFooter {
}