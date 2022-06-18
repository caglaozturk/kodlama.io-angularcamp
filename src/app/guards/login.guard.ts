import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	constructor(private authService: AuthService) {}

	canActivate() {
	  return this.authService.isLoggedIn();
	}
  
}
