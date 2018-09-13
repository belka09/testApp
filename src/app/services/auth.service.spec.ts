import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('return false for log in', inject([AuthService], (service: AuthService) => {
    service.isLoggedIn()
    expect(service.isLoggedIn()).toEqual(false);
  }));
});
