import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
  }
  isloggedIn(): boolean{
    return this.accountService.isLoggedIn()
  }
  logOut(){
    this.accountService.logOut()
  }
}
