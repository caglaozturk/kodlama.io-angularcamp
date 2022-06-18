import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	constructor(private authService: AuthService, private messageService:MessageService, private router:Router) {}

	canActivate() {
		if(this.authService.isLoggedIn()){
			return true;
		} else {
			this.messageService.add({
				severity: 'warn',
				summary: 'Warning',
				detail: 'Lütfen Giriş Yapınız'
			});
			this.router.navigate(['login'])
			return false;
		}
	}
  
}
