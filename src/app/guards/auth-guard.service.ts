import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {

    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      window.alert('you do not have permission');
      this.route.navigate(['/first'])
      return false;
    }
  }
}
