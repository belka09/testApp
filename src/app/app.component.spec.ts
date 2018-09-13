import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockBodyComponent,
        MockAppModalWindowComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {
}
@Component({
  selector: 'app-body',
  template: ''
})
class MockBodyComponent {
}
@Component({
  selector: 'app-modal-window',
  template: ''
})
class MockAppModalWindowComponent {
}
